import { ICreateMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMealIngredient extends ICreateMealIngredient {
  id: number;
  ingredientName: string;
}
