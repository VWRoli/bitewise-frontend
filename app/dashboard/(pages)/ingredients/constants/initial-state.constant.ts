import { IIngredientState } from '@/app/dashboard/(pages)/ingredients/interfaces';

export const INITIAL_STATE: IIngredientState = {
  ingredients: [],
  isError: false,
  isLoading: false,
};
