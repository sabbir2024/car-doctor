import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/header/NavBar';
import Footer from '../pages/shared/footer/Footer';

const MainLeyout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLeyout;