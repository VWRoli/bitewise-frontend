import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import {
  IMeal,
  IMealIngredient,
  INutrientTotals,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export const getNutrientLabels = (nutrientTotals: INutrientTotals) => {
  return [
    {
      label: 'Total Calories',
      value: nutrientTotals.totalCalories,
      unit: 'kcal',
    },
    { label: 'Total Protein', value: nutrientTotals.totalProtein, unit: 'g' },
    { label: 'Total Fat', value: nutrientTotals.totalFat, unit: 'g' },
    { label: 'Saturated Fat', value: nutrientTotals.saturatedFat, unit: 'g' },
    {
      label: 'Total Carbohydrates',
      value: nutrientTotals.totalCarbohydrates,
      unit: 'g',
    },
    { label: 'Sugar', value: nutrientTotals.sugar, unit: 'g' },
    { label: 'Dietary Fiber', value: nutrientTotals.dietaryFiber, unit: 'g' },
  ];
};

export const calculateNutrientTotals = (mealIngredients: IMealIngredient[]) => {
  return {
    totalCalories: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.calories,
      0,
    ),
    totalProtein: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.protein,
      0,
    ),
    totalFat: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.totalFat,
      0,
    ),
    saturatedFat: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.saturatedFat,
      0,
    ),
    totalCarbohydrates: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.totalCarbohydrates,
      0,
    ),
    sugar: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.sugar,
      0,
    ),
    dietaryFiber: mealIngredients.reduce(
      (sum, ingredient) => sum + ingredient.dietaryFiber,
      0,
    ),
  };
};

const enrichMealIngredient = (
  mealIngredient: IMealIngredient,
  ingredients: IIngredient[],
): IMealIngredient => {
  const ingredient = ingredients.find(
    (ing) => ing.id === mealIngredient.ingredientId,
  );
  return ingredient ? { ...mealIngredient, ...ingredient } : mealIngredient;
};

export const enrichMealIngredients = (
  meal: IMeal,
  ingredients: IIngredient[],
): IMeal => {
  const enrichedMealIngredients = meal.mealIngredients.map((mealIngredient) =>
    enrichMealIngredient(mealIngredient, ingredients),
  );
  return { ...meal, mealIngredients: enrichedMealIngredients };
};
