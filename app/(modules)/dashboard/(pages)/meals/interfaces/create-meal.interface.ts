import { ICreateMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface ICreateMeal {
  name: string;
  mealIngredients: ICreateMealIngredient[];
  userId: number;
}
