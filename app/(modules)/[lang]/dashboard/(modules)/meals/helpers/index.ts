import { IMealIngredient } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';

export const calculateColumnSum = (
  mealIngredients: IMealIngredient[],
  column: string,
): number => {
  const sum = mealIngredients.reduce((sum, ingredient) => {
    const quantity = parseFloat(ingredient.quantity + '') || 0;
    const columnValue = parseFloat(ingredient[column]) || 0;
    return sum + quantity * columnValue;
  }, 0);

  return parseFloat(sum.toFixed(1));
};

export const calculateMealIngredientValue = (
  mealIngredient: IMealIngredient,
  key: string | undefined,
) =>
  key
    ? parseFloat((mealIngredient[key] * mealIngredient.quantity).toFixed(1))
    : NaN;
