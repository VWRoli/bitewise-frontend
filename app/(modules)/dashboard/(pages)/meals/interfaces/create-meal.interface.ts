import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface ICreateMeal {
  name: string;
  mealIngredients: IMealIngredient[];
  userId: number;
}
