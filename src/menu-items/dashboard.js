// assets
import { IconDashboard, IconClipboardCheck, IconClipboardList } from '@tabler/icons';
import GroupsIcon from '@mui/icons-material/Groups';
// constant
const icons = { IconDashboard, IconClipboardCheck, IconClipboardList, GroupsIcon };

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
        }
    ]
};

export default dashboard;
