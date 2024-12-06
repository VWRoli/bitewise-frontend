import { ITableHeadData } from '@/app/utils/interfaces';

export const INGREDIENT_TABLE_HEAD_DATA: ITableHeadData[] = [
  { id: 'name', label: 'Name', sortable: true, align: 'justify-start' },
  { id: 'calories', label: 'Calories', sortable: true, align: 'justify-end' },
  { id: 'protein', label: 'Protein', sortable: true, align: 'justify-end' },
  {
    id: 'totalFat',
    label: 'Fat (Saturated)',
    sortable: true,
    align: 'justify-end',
  },
  {
    id: 'totalCarbohydrates',
    label: 'Carbs (Sugar)',
    sortable: true,
    align: 'justify-end',
  },
  { id: 'dietaryFiber', label: 'Fiber', sortable: true, align: 'justify-end' },
  { id: 'unit', label: 'Unit', sortable: true, align: 'justify-end' },
  { id: 'actions', label: '', sortable: true, align: 'justify-end' },
];
