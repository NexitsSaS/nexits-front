import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Lazy from 'yup/lib/Lazy';

// Dashboard routing
const UtilsMainStats = Loadable(lazy(() => import('views/dashboard/Default/new-components/mainstats')));

// Extra routing

const UtilsMainCatalog = Loadable(lazy(() => import('views/dashboard/Default/new-components/catalog')));
const UtilsMainPackHist = Loadable(lazy(() => import('views/dashboard/Default/new-components/historypack')));
const TeamStatsUtilsMain = Loadable(lazy(() => import('views/dashboard/Default/new-components/TeamDashboard')));
// const UtilsTeams = Loadable(lazy(() => import('views/dashboard/Default/new-components/Team')));
const UtilsMainProductDetails = Loadable(lazy(() => import('views/dashboard/Default/new-components/ProductDetails')));

// Min pages routing
const AssetsByUser = Loadable(lazy(() => import('views/pages/inventory')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <UtilsMainStats />
        },
        {
            path: '/teams',
            element: <TeamStatsUtilsMain />
        },
        {
            path: '/dashboard/stats',
            element: <UtilsMainStats />
        },
        {
            path: '/catalog',
            element: <UtilsMainCatalog />
        },
        {
            path: '/packhistory',
            element: <UtilsMainPackHist />
        },
        {
            path: '/dashboard/product/:id',
            element: <UtilsMainProductDetails />
        },

        {
            path: '/dashboard/assets',
            element: <AssetsByUser />
        }
    ]
};

export default MainRoutes;
