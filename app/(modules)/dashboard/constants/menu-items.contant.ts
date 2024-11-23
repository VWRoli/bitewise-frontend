import { IMenuItems } from '@/app/(modules)/dashboard/interfaces';
import {
  LayoutDashboard,
  ShoppingBasket,
  HandPlatter,
  NotebookPen,
  Calculator,
  CreditCard,
} from 'lucide-react';

export const MENU_ITEMS: IMenuItems[] = [
  {
    label: 'dashboard',
    route: '',
    icon: LayoutDashboard,
  },
  {
    label: 'ingredients',
    route: '/ingredients',
    icon: ShoppingBasket,
  },
  {
    label: 'meals',
    route: '/meals',
    icon: HandPlatter,
  },
  {
    label: 'mealPlans',
    route: '/meal-plans',
    icon: NotebookPen,
  },
];

export const SUB_MENU_ITEMS: IMenuItems[] = [
  {
    label: 'calculators',
    route: '/calculators',
    icon: Calculator,
  },
  {
    label: 'payment plans',
    route: '/payment-plans',
    icon: CreditCard,
  },
];
