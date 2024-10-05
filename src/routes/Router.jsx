import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLeyout from '../leyout/MainLeyout';
import Home from '../pages/home/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLeyout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default Router;