import { ITableHeadData } from '@/app/common/interfaces';

export const INGREDIENT_TABLE_HEAD_DATA: ITableHeadData[] = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'calories', label: 'Calories', align: 'right' },
  { id: 'protein', label: 'Protein', align: 'right' },
  { id: 'fat', label: 'Fat (Saturated)', align: 'right' },
  { id: 'carbs', label: 'Carbs (Sugar)', align: 'right' },
  { id: 'fiber', label: 'Fiber', align: 'right' },
  { id: 'unit', label: 'Unit', align: 'right' },
  { id: 'actions', label: '', align: 'right' },
];
