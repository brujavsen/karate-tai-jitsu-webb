import React from 'react'
import { Link } from 'react-router-dom'
import { TbPlaneTilt, TbHandClick } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";

const Index = () => {
  let slides = [
      {url: "/service-2.jpeg", urlWbp: '/service-2.webp', title: "Torneos"},
      {url: "/service-3.jpeg", urlWbp: '/service-3.webp', title: "Paseos"},
      {url: "/service-4.jpeg", urlWbp: '/service-4.webp', title: "Actividades Recreativas"},
      {url: "/service-5.jpeg", urlWbp: '/service-5.webp', title: "Uso de Armas Japonesas"},
      {url: "/service-6.jpeg", urlWbp: '/service-6.webp', title: "Graduaciones"},
  ];

  let cardInfo = [
    {qst: '¿Listo para impulsar tu autoestima y seguridad?', rsp: 'Nuestros expertos te ayudarán a desarrollar una mayor autoestima y seguridad en ti mismo.'},
    {qst: '¿Buscas estimular tu autocontrol y bienestar emocional?', rsp: 'Aprenderás técnicas para controlar tus emociones y reacciones, promoviendo un autocontrol saludable.'},
    {qst: '¿Quieres desarrollar valores positivos en tu vida?', rsp: 'Fomentamos la incorporación de valores positivos en tu vida para un crecimiento personal duradero.'},
    {qst: '¿Deseas aumentar tu confianza?', rsp: 'Nuestros programas te ayudarán a construir una confianza sólida en ti mismo.'},
    {qst: '¿Necesitas descargar excesos de energía?', rsp: 'Ofrecemos actividades físicas y emocionales que te permiten liberar el estrés y la energía acumulada.'},
    {qst: '¿Quieres mejorar tu concentración?', rsp: 'Desarrollamos ejercicios y técnicas para mejorar la concentración y el enfoque.'},
    {qst: '¿Buscas incrementar tu coordinación motriz?', rsp: 'Nuestros programas incluyen ejercicios que mejoran la coordinación motriz.'},
    {qst: '¿Listo para tonificar tus músculos?', rsp: 'Ofrecemos clases de acondicionamiento físico que te ayudarán a tonificar tus músculos y mejorar tu resistencia.'},
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className='hero_index'>
        <picture className='logo'>
          <source srcSet="/logo.webp"  type='image/webp' />
          <img width={400} height={400} loading='lazy' src="/logo.jpg" alt="logotipo img" />
        </picture>
        <div className="text">
          <p className='title_hero'>Escuela Tai Jitsu <br/> Karate Uruguay</p>
          <p className='first_class'>Te invitamos a tu primer clase gratis</p>
        </div>
      </section>
      <section className='section_services'>
        <h2 className='services-index-title'>Explora nuestra <span>Propuesta Integral</span> de Karate Tai Jitsu y desbloquea un mundo de técnicas y conocimientos completos.</h2>
        <article className='service-index'>
          {slides?.map((slide, slideIndex) => (
              <div className='slide' key={slideIndex}>
                <img loading='lazy' src={slide.url} alt={slide.title}/>
                <small>{slide.title}</small>
                <TbHandClick/>
              </div>
          ))}
        </article>
        <div className='services-index-btn'>
          <Link to={{ pathname: '/services', state: { scrollToTop: true }}} onClick={scrollToTop} className='service-btn'>Ir a Propuesta</Link>
        </div>
      </section>
      <section className='benefit_section'>
        <h2>¿Por qué hacer Tai Jitsu?</h2>
        <p>Explora cómo el <span>Tai Jitsu</span> va más allá de las técnicas de combate y se enfoca en el equilibrio y la armonía entre el cuerpo y la mente.</p>
        <h2>¿Cómo podemos ayudarte?</h2>
        <div className='grid'>
          {cardInfo?.map((info, infoIndex) => (
            <article className='card' key={infoIndex}>
              <TbHandClick/>
              <p className='card_title'>{info.qst}</p>
              <p className='card_cnt'>{info.rsp}</p>
            </article>
          ))}
        </div>
        <div className='final_info'>
          <p>¡Únete a nuestro centro Tai Jitsu y experimenta todos estos beneficios en tu propio viaje hacia la salud física y mental!</p>
          <Link to={{ pathname: '/dojos', state: { scrollToTop: true }}} onClick={scrollToTop}>Visita nuestros Dojos <TbPlaneTilt/></Link>
        </div>
        <div className='final_galery'>
          <div className='info_galery'>
            <p>¿Quieres conocer más a través de fotos?</p>
            <Link to={{ pathname: '/galery', state: { scrollToTop: true }}} onClick={scrollToTop}>
              Sumérgete en nuestra galería <MdOutlinePhotoCamera/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index