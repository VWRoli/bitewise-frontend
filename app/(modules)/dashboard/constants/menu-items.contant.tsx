import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { IMenuItems } from '@/app/(modules)/dashboard/interfaces';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddCardIcon from '@mui/icons-material/AddCard';

export const MENU_ITEMS: IMenuItems[] = [
  {
    label: 'dashboard',
    route: '',
    icon: <DashboardOutlinedIcon className="text-white" />,
  },
  {
    label: 'ingredients',
    route: '/ingredients',
    icon: <FastfoodOutlinedIcon className="text-white" />,
  },
  {
    label: 'meals',
    route: '/meals',
    icon: <RestaurantOutlinedIcon className="text-white" />,
  },
  {
    label: 'mealPlans',
    route: '/meal-plans',
    icon: <MenuBookIcon className="text-white" />,
  },
];

export const SUB_MENU_ITEMS: IMenuItems[] = [
  {
    label: 'faq',
    route: '/faq',
    icon: <HelpOutlineIcon className="text-white" />,
  },
  {
    label: 'payment plans',
    route: '/payment-plans',
    icon: <AddCardIcon className="text-white" />,
  },
];
