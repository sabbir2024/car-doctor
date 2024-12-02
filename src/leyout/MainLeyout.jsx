import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/header/NavBar';
import Footer from '../pages/shared/footer/Footer';
import { Toaster } from 'react-hot-toast';


const MainLeyout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default MainLeyout;