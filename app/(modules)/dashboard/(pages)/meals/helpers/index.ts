import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export const calculateColumnSum = (
  mealIngredients: IMealIngredient[],
  column: string,
): number => {
  return mealIngredients.reduce((sum, ingredient) => {
    return sum + (parseInt(ingredient[column], 10) || 0);
  }, 0);
};
