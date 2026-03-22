import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, NavLink, BrowserRouter, useLocation } from 'react-router-dom';
import { BiMenu, BiX } from "react-icons/bi";

const Index = lazy(()=> import('../components/Index'));
const Dojos = lazy(()=> import('../components/Dojos'));
const Services = lazy(()=> import('../components/Services'));
const Galery = lazy(()=> import('../components/Galery'));
const Error = lazy(()=> import('../components/Error'));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const RouterMain = () => {
    const year = new Date().getFullYear();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <BrowserRouter>
            <ScrollToTop />
            <header className='header'>
                <NavLink to="/" aria-label="Ir al inicio" onClick={closeMenu}>
                    <picture className='logo-header'>
                        <source className='image_header' srcSet="/logo.webp" type='image/webp' />
                        <img height={45} width={45} className='image_header' src="/logo.jpg" alt="logotipo img" />
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
                        to="/"
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
            
            <main className="main-content">
                <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                    <Routes>
                        <Route path='/' element={<Index/>} />
                        <Route path='/index' element={<Index/>} />
                        <Route path='/dojos' element={<Dojos/>} />
                        <Route path='/services' element={<Services/>} />
                        <Route path='/galery' element={<Galery/>} />
                        <Route path='*' element={<Error/>} />
                    </Routes>
                </Suspense>
            </main>

            <footer className='footer'>
                <div className="footer-content">
                    <p>&copy; {year} Derechos Reservados a Gimnasio Gimbo</p>
                </div>
            </footer>
        </BrowserRouter>
    );
};

export default RouterMain;