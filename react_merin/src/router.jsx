import {createBrowserRouter}from 'react-router-dom';
import Layouts from './layouts/Layouts';
import AuthLayout from './layouts/AuthLayout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Inicio />
            }]  
    },

    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },

]);

export default router;