import React, { lazy, Suspense, useMemo, useState } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { BiMenu, BiX } from "react-icons/bi";

const Index = lazy(()=> import('../components/Index'));
const Dojos = lazy(()=> import('../components/Dojos'));
const Services = lazy(()=> import('../components/Services'));
const Galery = lazy(()=> import('../components/Galery'));
const Error = lazy(()=> import('../components/Error'));

const RouterMain = () => {
    const year = useMemo(() => new Date().getFullYear(), []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <BrowserRouter>
            <header className='header'>
                <NavLink to="/index" aria-label="Ir al inicio">
                    <picture className='logo'>
                        <source className='image_header' srcSet="/logo.webp"  type='image/webp' />
                        <img height={30} width={30} className='image_header' loading='lazy' src="/logo.jpg" alt="logotipo img" />
                    </picture>
                </NavLink>
                <button
                    type="button"
                    className="icons"
                    aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <BiX id='close-icon' /> : <BiMenu id='menu-icon' />}
                </button>
                <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`} aria-label="Navegación principal">
                    <NavLink
                        onClick={closeMenu}
                        to="/index"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Inicio</NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to="/dojos"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Dojos</NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to="/services"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Propuesta Integral</NavLink>
                    <NavLink
                        onClick={closeMenu}
                        to="/galery"
                        className={({isActive}) => isActive ? "active" : ""}
                    >Galeria</NavLink>
                </nav>
            </header>
            {/* Cargar componentes */}
            {/* Aquí se carga el componente que coincide con el path */}
            <Routes>
                <Route path='/' element={
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Index/>
                    </Suspense>
                }/>
                <Route path='/index' element={
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Index/>
                    </Suspense>
                }/>
                <Route path='/dojos' element={
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Dojos/>
                    </Suspense>
                }/>
                <Route path='/services' element={
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Services/>
                    </Suspense>
                }/>
                <Route path='/galery' element={
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Galery/>
                    </Suspense>
                }/>
                <Route path='*' element={
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Error/>
                    </Suspense>
                }/>
            </Routes>

            <footer className='footer'>
                <p>&copy; {year} Derechos Reservados a Gimnasio Gimbo</p>
            </footer>
        </BrowserRouter>
    )
}

export default RouterMain