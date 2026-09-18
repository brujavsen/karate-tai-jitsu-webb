/**
 * Genera versiones WebP de las imagenes de /public y un manifiesto con sus
 * dimensiones reales, para poder reservar el espacio exacto en el layout
 * (CLS = 0) sin recortar ni cambiar el diseno masonry de la galeria.
 *
 *   node scripts/optimize-images.mjs
 *
 * Para cada imagen origen produce:
 *   <nombre>-sm.webp  -> version de grilla / tarjeta (siempre)
 *   <nombre>-lg.webp  -> solo donde hace falta a pantalla completa (heroes)
 *
 * La galeria no genera -lg: el modal muestra una imagen a la vez y el JPEG
 * original ya sirve de fallback, asi que duplicarlo en WebP no compensa.
 *
 * Los originales JPEG se conservan intactos como fallback de <picture>.
 * El script es idempotente: omite las salidas ya generadas y actualizadas.
 */
import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

// Cada grupo define de donde lee y a que anchos exporta.
const groups = [
  { name: 'galery', dir: 'galery', sm: 600 },
  { name: 'firstAid', dir: 'first-aid', sm: 600 },
  { name: 'root', dir: '.', sm: 800, lg: 1920, only: /^(service-\d+|dojo-hero|hero-service)\.(jpe?g|png)$/i },
];

const SOURCE_RE = /\.(jpe?g|png)$/i;

const isStale = async (src, out) => {
  try {
    const [a, b] = await Promise.all([stat(src), stat(out)]);
    return a.mtimeMs > b.mtimeMs;
  } catch {
    return true; // la salida no existe todavia
  }
};

const encode = async (src, out, width, quality) => {
  if (!(await isStale(src, out))) return false;
  await sharp(src)
    .rotate() // respeta la orientacion EXIF antes de redimensionar
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(out);
  return true;
};

const run = async () => {
  const manifest = {};
  let written = 0;
  let skipped = 0;

  for (const group of groups) {
    const dir = path.join(publicDir, group.dir);
    const entries = await readdir(dir);
    const sources = entries
      .filter((f) => SOURCE_RE.test(f))
      .filter((f) => !/-(sm|lg)\.webp$/i.test(f))
      .filter((f) => (group.only ? group.only.test(f) : true))
      .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

    const items = [];

    for (const file of sources) {
      const src = path.join(dir, file);
      const base = file.replace(SOURCE_RE, '');
      const urlDir = group.dir === '.' ? '' : `/${group.dir}`;

      const smOut = path.join(dir, `${base}-sm.webp`);
      let touched = await encode(src, smOut, group.sm, 74);

      if (group.lg) {
        const lgOut = path.join(dir, `${base}-lg.webp`);
        touched = (await encode(src, lgOut, group.lg, 80)) || touched;
      }
      touched ? written++ : skipped++;

      // Se miden sobre el -sm ya rotado por EXIF: al navegador solo le importa
      // la relacion de aspecto, y asi coincide con lo que realmente se pinta.
      const { width, height } = await sharp(smOut).metadata();

      items.push({
        src: `${urlDir}/${file}`,
        sm: `${urlDir}/${base}-sm.webp`,
        ...(group.lg ? { lg: `${urlDir}/${base}-lg.webp` } : {}),
        w: width,
        h: height,
      });
    }

    manifest[group.name] = items;
    console.log(`${group.name}: ${items.length} imagenes`);
  }

  const outFile = path.join(root, 'src', 'data', 'images.json');
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(`\nconvertidas: ${written} | ya al dia: ${skipped}`);
  console.log(`manifiesto -> src/data/images.json`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
