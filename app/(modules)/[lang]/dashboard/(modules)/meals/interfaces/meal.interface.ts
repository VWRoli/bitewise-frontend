import {
  ICreateMeal,
  IMealIngredient,
} from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';

export interface IMeal extends ICreateMeal {
  id: number;
  mealIngredients: IMealIngredient[];
}
