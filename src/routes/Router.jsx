import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLeyout from '../leyout/MainLeyout';
import Home from '../pages/home/Home';
import Login from '../pages/registered/login/Login';
import Signup from '../pages/registered/signup/Signup';
import CheckOut from '../pages/checkOut/CheckOut';
import MyBookings from '../pages/myBookings/MyBookings';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLeyout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: 'checkOut/:id',
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: 'myBookings',
                element: <MyBookings />,
            }
        ]
    }
]);

export default Router;
