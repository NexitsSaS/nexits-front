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
        // {
        //     id: 'default',
        //     title: 'Dashboard',
        //     type: 'item',
        //     url: '/dashboard/default',
        //     icon: icons.IconDashboard,
        //     breadcrumbs: false
        // },
        {
            id: 'mainstats',
            title: 'Stats',
            type: 'item',
            url: '/dashboard/mainstats',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

