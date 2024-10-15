import { IIngredientState } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';

export const INITIAL_STATE: IIngredientState = {
  ingredients: [],
  isError: false,
  isLoading: true,
};
