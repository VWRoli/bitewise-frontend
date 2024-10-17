import {
  ICreateMeal,
  IMealIngredient,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMeal extends ICreateMeal {
  id: number;
  mealIngredients: IMealIngredient[];
}
