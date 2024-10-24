import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export const calculateColumnSum = (
  mealIngredients: IMealIngredient[],
  column: string,
): number => {
  const sum = mealIngredients.reduce((sum, ingredient) => {
    return (
      sum +
      parseFloat(ingredient.quantity + '') *
        (parseFloat(ingredient[column]) || 0)
    );
  }, 0);

  return parseFloat(sum.toFixed(1));
};
