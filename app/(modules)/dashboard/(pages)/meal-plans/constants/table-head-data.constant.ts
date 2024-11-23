import { INGREDIENT_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { ITableHeadData } from '@/utils/interfaces';

export const MEAL_PLAN_TABLE_HEAD_DATA: ITableHeadData[] = [
  ...INGREDIENT_TABLE_HEAD_DATA.slice(0, 6),
  ...INGREDIENT_TABLE_HEAD_DATA.slice(7),
];
