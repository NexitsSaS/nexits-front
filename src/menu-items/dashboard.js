// assets
import { IconDashboard, IconUsers, } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconUsers };

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
        },
        {
            id: 'teams',
            title: 'teams',
            type: 'item',
            url: '/dashboard/teams',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'users',
            type: 'item',
            url: '/dashboard/users',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
