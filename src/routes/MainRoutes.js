import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Lazy from 'yup/lib/Lazy';

// Dashboard routing
const UtilsMainStats = Loadable(lazy(() => import('views/dashboard/Default/new-components/MainStats')));

// Extra routing

const UtilsMainCatalog = Loadable(lazy(() => import('views/dashboard/Default/new-components/catalog')));
const UtilsMainPackHist = Loadable(lazy(() => import('views/dashboard/Default/new-components/historypack')));
const TeamStatsUtilsMain = Loadable(lazy(() => import('views/dashboard/Default/new-components/TeamDashboard')));
// const UtilsTeams = Loadable(lazy(() => import('views/dashboard/Default/new-components/Team')));
const UtilsMainProductDetails = Loadable(lazy(() => import('views/dashboard/Default/new-components/ProductDetails')));
const UtilsUsers = Loadable(lazy(() => import('views/dashboard/Default/new-components/all-users-module/AllUsersPage')))
const AddUserView = Loadable(lazy(() => import('views/dashboard/Default/new-components/all-users-module/AddUserView')))
// Min pages routing
const AssetsByUser = Loadable(lazy(() => import('views/pages/inventory/AssestsUserTable')));
const UserAssetsCurrent = Loadable(lazy(() => import('views/pages/inventory/AssetsManagement')));

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
            path: '/assets/user/:id',
            element: <UserAssetsCurrent />
        },
        {
            path: '/assets',
            element: <AssetsByUser />
        },
          {
            path:'/dashboard/users',
            element: <UtilsUsers />
        },
        {
            path:'/dashboard/uses/adduser',
            element: <AddUserView />
        }
    ]
};

export default MainRoutes;
