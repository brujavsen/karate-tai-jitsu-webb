import React from 'react';
import { Link } from 'react-router-dom';
import { TbPlaneTilt, TbHandClick } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";

const slides = [
    {url: "/service-2.jpeg", urlWbp: '/service-2.webp', title: "Torneos"},
    {url: "/service-3.jpeg", urlWbp: '/service-3.webp', title: "Paseos"},
    {url: "/service-4.jpeg", urlWbp: '/service-4.webp', title: "Actividades Recreativas"},
    {url: "/service-5.jpeg", urlWbp: '/service-5.webp', title: "Uso de Armas Japonesas"},
    {url: "/service-6.jpeg", urlWbp: '/service-6.webp', title: "Graduaciones"},
];

const cardInfo = [
    {qst: '¿Listo para impulsar tu autoestima y seguridad?', rsp: 'Nuestros expertos te ayudarán a desarrollar una mayor autoestima y seguridad en ti mismo.'},
    {qst: '¿Buscas estimular tu autocontrol y bienestar emocional?', rsp: 'Aprenderás técnicas para controlar tus emociones y reacciones, promoviendo un autocontrol saludable.'},
    {qst: '¿Quieres desarrollar valores positivos en tu vida?', rsp: 'Fomentamos la incorporación de valores positivos en tu vida para un crecimiento personal duradero.'},
    {qst: '¿Deseas aumentar tu confianza?', rsp: 'Nuestros programas te ayudarán a construir una confianza sólida en ti mismo.'},
    {qst: '¿Necesitas descargar excesos de energía?', rsp: 'Ofrecemos actividades físicas y emocionales que te permiten liberar el estrés y la energía acumulada.'},
    {qst: '¿Quieres mejorar tu concentración?', rsp: 'Desarrollamos ejercicios y técnicas para mejorar la concentración y el enfoque.'},
    {qst: '¿Buscas incrementar tu coordinación motriz?', rsp: 'Nuestros programas incluyen ejercicios que mejoran la coordinación motriz.'},
    {qst: '¿Listo para tonificar tus músculos?', rsp: 'Ofrecemos clases de acondicionamiento físico que te ayudarán a tonificar tus músculos y mejorar tu resistencia.'},
];

const Index = () => {
  return (
    <>
      <section className='hero_index'>
        <div className="hero_index-card">
          <picture className='logo'>
            <source srcSet="/logo.webp" type='image/webp' />
            <img width={250} height={250} src="/logo.jpg" alt="Escuela Tai Jitsu Uruguay Logo" />
          </picture>
          <div className="text">
            <h1 className='title_hero'>Escuela Tai Jitsu <br/> Karate Uruguay</h1>
            <p className='first_class'>Te invitamos a tu primer clase gratis</p>
          </div>
        </div>
      </section>

      <section className='section_services'>
        <h2 className='services-index-title'>Explora nuestra <span>Propuesta Integral</span> de Karate Tai Jitsu y desbloquea un mundo de técnicas y conocimientos complejos.</h2>
        <article className='service-grid'>
          {slides.map((slide, slideIndex) => (
              <div className='slide-card' key={slideIndex}>
                <img loading='lazy' src={slide.url} alt={slide.title} width={300} height={200} />
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <TbHandClick className='interaction-icon' />
                </div>
              </div>
          ))}
        </article>
        <div className='services-index-btn'>
          <Link to="/services" className='btn-primary'>Ver Propuesta Completa</Link>
        </div>
      </section>

      <section className='benefit_section'>
        <div className="benefit_intro">
          <h2>¿Por qué hacer Tai Jitsu?</h2>
          <p>Explora cómo el <span>Tai Jitsu</span> va más allá de las técnicas de combate y se enfoca en el equilibrio y la armonía entre el cuerpo y la mente.</p>
        </div>
        
        <h2 className='benefit-features-title'>¿Cómo podemos ayudarte?</h2>
        <div className='benefit_grid'>
          {cardInfo.map((info, infoIndex) => (
            <article className='card' key={infoIndex}>
              <div className="card-icon">
                <TbHandClick/>
              </div>
              <h3 className='card_title'>{info.qst}</h3>
              <p className='card_cnt'>{info.rsp}</p>
            </article>
          ))}
        </div>

        <div className='final_info'>
          <p>¡Únete a nuestro centro Tai Jitsu y experimenta todos estos beneficios en tu propio viaje hacia la salud física y mental!</p>
          <div className="button-group">
            <Link to="/dojos" className='btn-secondary'>
              Visita nuestros Dojos <TbPlaneTilt/>
            </Link>
            <Link to="/galery" className='btn-tertiary'>
              Nuestra Galería <MdOutlinePhotoCamera/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;