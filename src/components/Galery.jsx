import { useCallback, useEffect, useRef, useState } from "react";
import { BiXCircle } from "react-icons/bi";

import images from "../data/images.json";

// El alt se fija una vez aqui: describe la foto y su posicion en el conjunto,
// en vez del "img 1" / "img 11" original que no aportaba nada.
const withAlt = (list, describe) =>
  list.map((image, index) => ({
    ...image,
    alt: describe(index + 1, list.length),
  }));

const galleryImages = withAlt(
  images.galery,
  (n, total) => `Actividad de la escuela, foto ${n} de ${total}`
);
const firstAidImages = withAlt(
  images.firstAid,
  (n, total) => `Taller de primeros auxilios, foto ${n} de ${total}`
);

const COLUMN_COUNT = 3;

// Reparto en columnas equilibrando la ALTURA, no la cantidad. Como todas las
// columnas miden lo mismo de ancho, la altura que ocupara cada foto es
// proporcional a su relacion alto/ancho, que ya viene en el manifiesto. Cada
// foto se va a la columna mas corta en ese momento, asi las tres terminan
// practicamente al mismo nivel; repartirlas a partes iguales dejaba unas
// columnas mucho mas largas que otras porque las fotos no son todas iguales.
const columns = (() => {
  const cols = Array.from({ length: COLUMN_COUNT }, () => []);
  const heights = new Array(COLUMN_COUNT).fill(0);

  for (const image of galleryImages) {
    let shortest = 0;
    for (let i = 1; i < COLUMN_COUNT; i += 1) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    cols[shortest].push(image);
    heights[shortest] += image.h / image.w;
  }

  return cols;
})();

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const clampZoom = (value) => Math.min(Math.max(value, MIN_ZOOM), MAX_ZOOM);

const Thumbnail = ({ image, onOpen }) => (
  <button
    type="button"
    className="image_item"
    onClick={() => onOpen(image)}
    aria-label={`Ampliar: ${image.alt}`}
  >
    <picture>
      <source srcSet={image.sm} type="image/webp" />
      {/* width/height reservan la altura exacta antes de descargar la imagen:
          sin esto el lazy nativo no funciona y el layout salta (CLS). */}
      <img
        src={image.src}
        width={image.w}
        height={image.h}
        loading="lazy"
        decoding="async"
        alt={image.alt}
      />
    </picture>
  </button>
);

const Galery = () => {
  const [imageSelected, setImageSelected] = useState(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [isPanning, setIsPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const startPan = useRef({ x: 0, y: 0 });
  const lastFocused = useRef(null);

  const isOpen = imageSelected !== null;

  const openImage = (image) => {
    lastFocused.current = document.activeElement;
    setImageSelected(image);
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  };

  const closeImage = useCallback(() => {
    setImageSelected(null);
    setIsPanning(false);
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  }, []);

  const zoomBy = useCallback((delta) => {
    setZoom((prev) => {
      const next = clampZoom(prev + delta);
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) closeImage();
  };

  const handlePointerDown = (event) => {
    if (zoom === MIN_ZOOM) return;
    event.preventDefault();
    setIsPanning(true);
    startPan.current = { x: event.clientX - offset.x, y: event.clientY - offset.y };
  };

  const handlePointerMove = (event) => {
    if (!isPanning) return;
    setOffset({
      x: event.clientX - startPan.current.x,
      y: event.clientY - startPan.current.y,
    });
  };

  const stopPanning = () => setIsPanning(false);

  // Escape para cerrar.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeImage]);

  // La rueda tiene que ir con { passive: false }: React registra onWheel de
  // forma pasiva en la raiz y ahi preventDefault() se ignora, con lo que la
  // pagina de fondo scrollea mientras se hace zoom.
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!isOpen || !overlay) return;
    const onWheel = (event) => {
      event.preventDefault();
      zoomBy(event.deltaY < 0 ? 0.25 : -0.25);
    };
    overlay.addEventListener("wheel", onWheel, { passive: false });
    return () => overlay.removeEventListener("wheel", onWheel);
  }, [isOpen, zoomBy]);

  // Bloquea el scroll del fondo y devuelve el foco al cerrar.
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const restoreTo = lastFocused.current;
    return () => {
      document.body.style.overflow = overflow;
      if (restoreTo instanceof HTMLElement) restoreTo.focus();
    };
  }, [isOpen]);

  return (
    <>
      <section className="hero_galery" aria-labelledby="galery-title">
        <div className="hero_title">
          <h2 id="galery-title">Galería</h2>
          <p>Conoce a través de fotos</p>
        </div>
      </section>

      <section className="first-aid" aria-labelledby="first-aid-title">
        <h3 id="first-aid-title" className="gallery-section-title">
          Primeros auxilios
        </h3>
        <div className="first-aid__grid">
          {firstAidImages.map((image) => (
            <Thumbnail key={image.src} image={image} onOpen={openImage} />
          ))}
        </div>
      </section>

      <h3 className="gallery-section-title">Actividades</h3>
      <section className="row" aria-label="Galería de actividades">
        {columns.map((column, columnIndex) => (
          <div className="column" key={columnIndex}>
            {column.map((image) => (
              <Thumbnail key={image.src} image={image} onOpen={openImage} />
            ))}
          </div>
        ))}
      </section>

      {isOpen && (
        <div
          className="popup-img"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={handleOverlayClick}
          onMouseMove={handlePointerMove}
          onMouseUp={stopPanning}
          onMouseLeave={stopPanning}
        >
          <button
            type="button"
            className="close-icon"
            ref={closeButtonRef}
            onClick={closeImage}
            aria-label="Cerrar imagen"
          >
            <BiXCircle />
          </button>

          <div className="popup-img__content">
            <img
              src={imageSelected.src}
              alt={imageSelected.alt}
              className={isPanning ? "grabbing" : ""}
              style={{
                transform: `translate(-50%, -50%) scale(${zoom}) translate(${
                  offset.x / zoom
                }px, ${offset.y / zoom}px)`,
              }}
              onMouseDown={handlePointerDown}
              draggable={false}
            />

            <div className="popup-img__controls">
              <button
                type="button"
                onClick={() => zoomBy(-0.5)}
                disabled={zoom <= MIN_ZOOM}
                aria-label="Alejar"
              >
                −
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                onClick={() => zoomBy(0.5)}
                disabled={zoom >= MAX_ZOOM}
                aria-label="Acercar"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Galery;
