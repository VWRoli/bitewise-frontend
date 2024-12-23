import { IMeal } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';

export function flatMealIngredients(meals: IMeal[]) {
  return meals.flatMap((meal) => meal.mealIngredients);
}

export const calculateMealValue = (
  meal: IMeal,
  column: string,
  subColumn?: string,
) => {
  const totals = meal.mealIngredients.reduce(
    ([mainTotal, subTotal], ingredient) => {
      const baseValue = ingredient[column as keyof typeof ingredient] || 0;
      const subValue = subColumn
        ? ingredient[subColumn as keyof typeof ingredient] || 0
        : 0;

      const mainCalculatedValue =
        (typeof baseValue === 'number' ? baseValue : 0) * ingredient.quantity;
      const subCalculatedValue =
        (typeof subValue === 'number' ? subValue : 0) * ingredient.quantity;

      return [mainTotal + mainCalculatedValue, subTotal + subCalculatedValue];
    },
    [0, 0],
  );
  // eslint-disable-next-line
  return totals.map((total) => Math.round(total * 10) / 10);
};
