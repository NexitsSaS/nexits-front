// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'mainstats',
            title: 'Stats',
            type: 'item',
            url: '/dashboard/mainstats',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'catalog',
            title: 'catalogue general',
            type: 'item',
            url: '/dashboard/catalog',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'packhist',
            title: 'pack history',
            type: 'item',
            url: '/dashboard/packhistory',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

