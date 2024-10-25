import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export function flatMealIngredients(meals: IMeal[]) {
  return meals.flatMap((meal) => meal.mealIngredients);
}
export const calculateMealValue = (
  meal: IMeal,
  column: string,
  subColumn?: string,
) => {
  return meal.mealIngredients.reduce((total, ingredient) => {
    const baseValue = ingredient[column as keyof typeof ingredient] || 0;

    const calculatedValue = subColumn
      ? (baseValue[subColumn as keyof typeof baseValue] || 0) *
        ingredient.quantity
      : baseValue * ingredient.quantity;

    return total + calculatedValue;
  }, 0);
};
