import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, NavLink, BrowserRouter, useLocation } from 'react-router-dom';

import Header from '../components/Header';

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
    
    return (
        <BrowserRouter>
            <ScrollToTop />
            
            <Header />
            
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