import { IMenuItem } from '@/app/(modules)/dashboard/interfaces';
import { EOrderDirection } from '@/app/utils/enums';
import {
  LayoutDashboard,
  ShoppingBasket,
  HandPlatter,
  NotebookPen,
  Calculator,
  CreditCard,
} from 'lucide-react';

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: 'dashboard',
    route: '',
    icon: LayoutDashboard,
  },
  {
    label: 'ingredients',
    route: `/ingredients?page=1&orderBy=calories&orderDirection=${EOrderDirection.ASC}`,
    icon: ShoppingBasket,
  },
  {
    label: 'meals',
    route: `/meals?page=1&orderBy=name&orderDirection=${EOrderDirection.ASC}`,
    icon: HandPlatter,
  },
  {
    label: 'mealPlans',
    route: `/meal-plans?page=1&orderBy=name&orderDirection=${EOrderDirection.ASC}`,
    icon: NotebookPen,
  },
];

export const SUB_MENU_ITEMS: IMenuItem[] = [
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
