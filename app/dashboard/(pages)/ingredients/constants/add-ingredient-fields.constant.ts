export const ADD_INGRENDIENT_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'protein', label: 'Protein', type: 'number', required: true },
  { name: 'totalFat', label: 'Total Fat', type: 'number', required: true },
  {
    name: 'saturatedFat',
    label: 'Saturated Fat',
    type: 'number',
    required: true,
  },
  {
    name: 'totalCarbohydrates',
    label: 'Total Carbohydrates',
    type: 'number',
    required: true,
  },
  { name: 'sugar', label: 'Sugar', type: 'number', required: true },
  {
    name: 'dietaryFiber',
    label: 'Dietary Fiber',
    type: 'number',
    required: true,
  },
  { name: 'calories', label: 'Calories', type: 'number', required: true },
];
