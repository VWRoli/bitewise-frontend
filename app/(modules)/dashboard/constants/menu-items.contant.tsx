import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { IMenuItems } from '@/app/(modules)/dashboard/interfaces';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddCardIcon from '@mui/icons-material/AddCard';
import { grey } from '@mui/material/colors';

export const MENU_ITEMS: IMenuItems[] = [
  {
    label: 'dashboard',
    route: '',
    icon: <DashboardOutlinedIcon sx={{ color: grey[50] }} />,
  },
  {
    label: 'ingredients',
    route: '/ingredients',
    icon: <FastfoodOutlinedIcon sx={{ color: grey[50] }} />,
  },
  {
    label: 'meals',
    route: '/meals',
    icon: <RestaurantOutlinedIcon sx={{ color: grey[50] }} />,
  },
  {
    label: 'mealPlans',
    route: '/meal-plans',
    icon: <MenuBookIcon sx={{ color: grey[50] }} />,
  },
];

export const SUB_MENU_ITEMS: IMenuItems[] = [
  {
    label: 'faq',
    route: '/faq',
    icon: <HelpOutlineIcon sx={{ color: grey[50] }} />,
  },
  {
    label: 'payment plans',
    route: '/payment-plans',
    icon: <AddCardIcon sx={{ color: grey[50] }} />,
  },
];
