import React from 'react'
import { useLocation } from 'react-router-dom';

const Dojos = () => {
  const location = useLocation();

  if (location.state && location.state.scrollToTop) {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className='hero_dojo'>
        <div className='hero_title'>
          <h2>Dojos Habilitados</h2>
          <p>Tu viaje comienza aquí</p>
        </div>
      </div>
      <div className='dojos'>
        <div className='dojo'>
          <div className='dojo_info'>
              <h3>Central <br/>(Gimnasio Gimbo)</h3>
            <p>
              Martes y Jueves <span>19:00 Hs (Niños y Niñas)</span> | <span>20:00 Hs (Adolescentes y Adultos)</span>
            </p>
            <a href="https://maps.app.goo.gl/T6wZLz186MRNV2JQ9" target='__blank' referrerPolicy='no-referrer'>Ver Mapa</a>
          </div>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <h3>Casarino <br/> (Salón la capilla KM 3)</h3>
            <p>
              Martes y Viernes <span>09:30 Hs</span> <br/>
              Lunes y Miércoles <span>17:30 Hs (Niños/as)</span> | <span>18:30 Hs (Niños/as)</span> | <span>19:30 Hs (Niños/as - Adolescentes)</span>
            </p>
            <a href="https://maps.app.goo.gl/KK4BxLw4FF8kSkyD6" target='__blank' referrerPolicy='no-referrer'>Ver Mapa</a>
          </div>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <h3>Toledo <br/> (Club juventud unida)</h3>
            <p>
              Martes y Viernes <span>17:30 Hs</span>
            </p>
            <a href="https://maps.app.goo.gl/FKH1Dd6QowcfF1B27" target='__blank' referrerPolicy='no-referrer'>Ver Mapa</a>
          </div>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <h3>Sauce <br/> (Club excursionista amistad)</h3>
            <p>
              Lunes y Miércoles <span>20:00 Hs (Todas las edades)</span> <br />
              Martes y Jueves <span>17:45 Hs</span> | <span>18:45 Hs</span>
            </p>
            <a href="https://maps.app.goo.gl/FKH1Dd6QowcfF1B27" target='__blank' referrerPolicy='no-referrer'>Ver Mapa</a>
          </div>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <h3>Joaquín Suárez <br/> (Club de los abuelos)</h3>
            <p>
              Martes y Jueves <span>18:00 Hs</span>
            </p>
          </div>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <h3>Toledo Chico <br/> (Salón Onuzka)</h3>
            <p>
              Martes y Jueves <span>17:30 Hs</span>
            </p>
          </div>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <h3>Dojo Los Aromos <br/> (Club Los Aromos Baby Futbol)</h3>
            <p>
              Martes y Jueves <span>18:00 Hs</span> | <span>19:00 Hs</span>
            </p>
            <a href="https://maps.app.goo.gl/Ksw3wDC8GGdck4RCA" target='__blank' referrerPolicy='no-referrer'>Ver Mapa</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dojos