import { ITableHeadData } from '@/app/utils/interfaces';

export const MEAL_PLAN_TABLE_HEAD_DATA: ITableHeadData[] = [
  { id: 'name', label: 'Name', sortable: true, align: 'justify-start' },
  { id: 'calories', label: 'Calories', sortable: false, align: 'justify-end' },
  { id: 'protein', label: 'Protein', sortable: false, align: 'justify-end' },
  {
    id: 'totalFat',
    label: 'Fat (Saturated)',
    sortable: false,
    align: 'justify-end',
  },
  {
    id: 'totalCarbohydrates',
    label: 'Carbs (Sugar)',
    sortable: false,
    align: 'justify-end',
  },
  { id: 'dietaryFiber', label: 'Fiber', sortable: false, align: 'justify-end' },
  { id: 'actions', label: '', sortable: false, align: 'justify-end' },
];
