import { ITableHeadData } from '@/app/utils/interfaces';

export const INGREDIENT_TABLE_HEAD_DATA: ITableHeadData[] = [
  { id: 'name', label: 'Name', align: 'justify-start' },
  { id: 'calories', label: 'Calories', align: 'justify-end' },
  { id: 'protein', label: 'Protein', align: 'justify-end' },
  { id: 'totalFat', label: 'Fat (Saturated)', align: 'justify-end' },
  { id: 'totalCarbohydrates', label: 'Carbs (Sugar)', align: 'justify-end' },
  { id: 'dietaryFiber', label: 'Fiber', align: 'justify-end' },
  { id: 'unit', label: 'Unit', align: 'justify-end' },
  { id: 'actions', label: '', align: 'justify-end' },
];
