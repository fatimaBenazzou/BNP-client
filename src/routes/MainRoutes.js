import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { Navigate } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// ==============================|| MAIN ROUTING ||============================== //

export default function MainRoutes(user){
    return {
    path: '/',
    element: user ?<MainLayout />: <Navigate to="/login"/>,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/requests',
            element: <DashboardDefault />
        },
    ]
}}