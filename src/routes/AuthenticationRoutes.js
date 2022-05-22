import { lazy } from 'react';
import {  Navigate } from "react-router-dom";

// project imports
import Loadable from 'ui-component/Loadable';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //



export default function AuthenticationRoutes(user){
    return [
        {
            path: '/login',
            element: user?<Navigate to="/"/>: <AuthLogin3 />
        },
        {
            path: '/register',
            element:user?<Navigate to="/"/>: <AuthRegister3 />
        }
    ]
};
