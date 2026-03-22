import React from 'react';

const dojosData = [
  {
    id: 'central-gimbo',
    name: 'Central (Gimnasio Gimbo)',
    schedule: 'Martes y Jueves',
    details: [
      '19:00 Hs (Niños y Niñas)',
      '20:00 Hs (Adolescentes y Adultos)',
    ],
    mapUrl: 'https://maps.app.goo.gl/T6wZLz186MRNV2JQ9',
  },
  {
    id: 'casarino',
    name: 'Casarino (Salón la capilla KM 3)',
    schedule: 'Martes y Viernes / Lunes y Miércoles',
    details: [
      'Martes y Viernes 09:30 Hs',
      'Lunes y Miércoles 17:30 Hs (Niños/as)',
      '18:30 Hs (Niños/as)',
      '19:30 Hs (Niños/as - Adolescentes)',
    ],
    mapUrl: 'https://maps.app.goo.gl/KK4BxLw4FF8kSkyD6',
  },
  {
    id: 'toledo',
    name: 'Toledo (Club juventud unida)',
    schedule: 'Martes y Viernes',
    details: ['17:30 Hs'],
    mapUrl: 'https://maps.app.goo.gl/FKH1Dd6QowcfF1B27',
  },
  {
    id: 'sauce',
    name: 'Sauce (Club excursionista amistad)',
    schedule: 'Lunes y Miércoles / Martes y Jueves',
    details: [
      'Lunes y Miércoles 20:00 Hs (Todas las edades)',
      'Martes y Jueves 17:45 Hs',
      '18:45 Hs',
    ],
    mapUrl: 'https://maps.app.goo.gl/FKH1Dd6QowcfF1B27',
  },
  {
    id: 'joaquin-suarez',
    name: 'Joaquín Suárez (Club de los abuelos)',
    schedule: 'Martes y Jueves',
    details: ['18:00 Hs'],
  },
  {
    id: 'toledo-chico',
    name: 'Toledo Chico (Salón Onuzka)',
    schedule: 'Martes y Jueves',
    details: ['17:30 Hs'],
  },
  {
    id: 'los-aromos',
    name: 'Dojo Los Aromos (Club Los Aromos Baby Futbol)',
    schedule: 'Martes y Jueves',
    details: ['18:00 Hs', '19:00 Hs'],
    mapUrl: 'https://maps.app.goo.gl/Ksw3wDC8GGdck4RCA',
  },
];

const Dojos = () => {
  return (
    <>
      <section className='hero_dojo' aria-labelledby="dojos-title">
        <div className='hero_title'>
          <h2 id="dojos-title">Dojos habilitados</h2>
          <p>Tu viaje comienza aquí</p>
        </div>
      </section>
      
      <section className='dojos-container' aria-label="Listado de dojos">
        <div className='dojos-grid'>
          {dojosData.map((dojo) => (
            <article key={dojo.id} className='dojo-card'>
              <div className='dojo-info'>
                <h3 className='dojo-name'>{dojo.name}</h3>
                <p className='dojo-schedule'><strong>{dojo.schedule}</strong></p>
                <ul className='dojo-details'>
                  {dojo.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className='dojo-action'>
                    {dojo.mapUrl ? (
                    <a
                        href={dojo.mapUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-outline'
                    >
                        Ver mapa
                    </a>
                    ) : (
                    <span className='no-map'>Sin mapa disponible</span>
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dojos;