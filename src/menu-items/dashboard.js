// assets
import { IconDashboard, IconClipboardCheck, IconClipboardList, IconUsers } from '@tabler/icons';
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
// constant
const icons = { IconDashboard, IconClipboardCheck, IconClipboardList, GroupsIcon, CategoryIcon, IconUsers };

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
            url: '/dashboard/stats',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'catalog',
            title: 'General Catalog',
            type: 'item',
            url: '/catalog',
            icon: icons.IconClipboardList,
            breadcrumbs: false
        },
        {
            id: 'packhist',
            title: 'Pack History',
            type: 'item',
            url: '/packhistory',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        },
        {
            id: 'teamDashboard',
            title: 'Teams',
            type: 'item',
            url: '/teams',
            icon: icons.GroupsIcon,
            breadcrumbs: false
        },
        {
            id: 'Assets',
            title: 'assets',
            type: 'item',
            url: '/assets',
            icon: icons.CategoryIcon,
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
