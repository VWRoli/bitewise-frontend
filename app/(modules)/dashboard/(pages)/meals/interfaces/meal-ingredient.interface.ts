import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { ICreateMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMealIngredient extends ICreateMealIngredient, IIngredient {
  id: number;
  ingredientName: string;
  ingredientId: number;
  quantity: number;
}
