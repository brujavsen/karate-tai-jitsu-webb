import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  // El rewrite de Vercel sirve index.html con HTTP 200 para cualquier ruta, asi
  // que sin esto Google indexaria las URLs inexistentes como paginas validas.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <section className="error-page" aria-labelledby="error-title">
      <div className="error-page__content">
        <h1 id="error-title">Página no encontrada</h1>
        <p>Lo sentimos, la página que intentas visitar no existe o fue movida.</p>
        <Link to="/" className="error-page__link">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default Error;
