import { INGREDIENT_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { ITableHeadData } from '@/app/utils/interfaces';

export const MEAL_TABLE_HEAD_DATA: ITableHeadData[] = [
  ...INGREDIENT_TABLE_HEAD_DATA.slice(0, -2),
  { id: 'quantity', label: 'quantity', align: 'right' },
  ...INGREDIENT_TABLE_HEAD_DATA.slice(-2),
];
