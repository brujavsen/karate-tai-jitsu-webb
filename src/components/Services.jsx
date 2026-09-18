import React from 'react';

import images from '../data/images.json';

const bySrc = Object.fromEntries(images.root.map((image) => [image.src, image]));

const servicesData = [
  { url: "/service-8.jpeg", title: "Clases de Karate", desc: 'Sumérgete en el mundo del Karate Tai Jitsu. Nuestras clases te ofrecen la oportunidad de aprender las técnicas tradicionales, mejorar tu condición física y cultivar una mente fuerte.' },
  { url: "/service-1.jpeg", title: "Defensa Personal", desc: 'La seguridad personal es una prioridad. Aprende técnicas efectivas y gana confianza en ti mismo. Tu seguridad es nuestra misión.' },
  { url: "/service-5.jpeg", title: "Uso de armas tradicionales (kobudo)", desc: 'Descubre el arte del kobudo y domina el uso de armas tradicionales japonesas.' },
  { url: "/service-2.jpeg", title: "Torneos nacionales e internacionales", desc: 'Participa en nuestros emocionantes torneos nacionales e internacionales.' },
  { url: "/service-6.jpeg", title: "Graduaciones Avaladas", desc: 'Avanza en tu camino de karate y alcanza nuevas graduaciones con el respaldo de nuestros instructores experimentados.' },
  { url: "/service-4.jpeg", title: "Actividades Recreativas", desc: 'Ven a vivir una experiencia única y emocionante. Disfruta de nuestras variadas actividades recreativas que fortalecen el espíritu de equipo.' },
  { url: "/service-3.jpeg", title: "Paseos", desc: 'Conecta con tu entorno y experimenta momentos de calma y reflexión en compañía de amigos y compañeros de dojo.' },
  { url: "/service-11.jpg", title: "Campamentos", desc: 'Forja amistades duraderas y mejora tus habilidades en un entorno inspirador durante nuestros campamentos.' },
  { url: "/service-10.jpeg", title: "Encuentros", desc: 'Participa en emocionantes encuentros y eventos especiales.' }
].map((service) => ({ ...service, ...bySrc[service.url] }));

const Services = () => {
  return (
    <>
      <section className='hero_services' aria-labelledby="services-title">
        <div className='hero_title'>
          <h2 id="services-title">Propuesta integral</h2>
          <p>¿Listo para unirte?</p>
        </div>
      </section>

      <section className='main_services' aria-label="Propuesta integral de Karate Tai Jitsu">
        <header className='main_title'>
          <h2>Explora nuestra Propuesta Integral de Karate Tai Jitsu</h2>
          <p>Con profesores capacitados, con más de 15 años de experiencia</p>
        </header>
        
        <section className='services-grid' aria-label="Servicios ofrecidos">
          {servicesData.map((service) => (
            <article key={service.url} className='service-card-modern'>
              <div className='service-image-wrapper'>
                <picture>
                  <source srcSet={service.sm} type='image/webp' />
                  <img
                    src={service.url}
                    width={service.w}
                    height={service.h}
                    loading='lazy'
                    decoding='async'
                    alt={service.title}
                  />
                </picture>
              </div>
              <div className='service-content'>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
};

export default Services;