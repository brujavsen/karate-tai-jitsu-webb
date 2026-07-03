import React from 'react'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
  return (
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
  )
}

export default Header