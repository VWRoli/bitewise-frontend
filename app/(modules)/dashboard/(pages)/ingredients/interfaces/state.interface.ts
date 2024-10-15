import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces/ingredient.interface';

export interface IIngredientState {
  ingredients: IIngredient[];
  isLoading: boolean;
  isError: boolean;
}
