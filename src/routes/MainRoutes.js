import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Lazy from 'yup/lib/Lazy';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const UtilsMainStats = Loadable(lazy(() => import('views/dashboard/Default/new-components/MainStats')));
const UtilsMainCatalog = Loadable(lazy(() => import('views/dashboard/Default/new-components/Catalog')));
const UtilsMainPackHist=Loadable(lazy(()=>import('views/dashboard/Default/new-components/HistoryPack')))
const UtilsMainProductDetails=Loadable(lazy(()=>import('views/dashboard/Default/new-components/ProductDetails')))
const UtilsTeams = Loadable(lazy(() => import('views/dashboard/Default/new-components/Team')));
// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

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
            path: '/dashboard/default',
            element: <DashboardDefault />
        },

        {
            path: '/dashboard/mainstats',
            element: <UtilsMainStats />
        },
        {
            path: '/dashboard/catalog',
            element: <UtilsMainCatalog />
        },
        {
            path: '/dashboard/packhistory',
            element: <UtilsMainPackHist/>
        },
        {
            path: '/dashboard/product/:id',
            element: <UtilsMainProductDetails/>
        },
        {
            path: '/dashboard/teams',
            element: <UtilsTeams />
        }
    ]
};

export default MainRoutes;
