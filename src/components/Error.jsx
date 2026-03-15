import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className="error-page" aria-labelledby="error-title">
      <section className="error-page__content">
        <h1 id="error-title">Página no encontrada</h1>
        <p>Lo sentimos, la página que intentas visitar no existe o fue movida.</p>
        <Link to="/index" className="error-page__link">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

export default Error;