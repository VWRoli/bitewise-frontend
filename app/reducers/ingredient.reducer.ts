import { INITIAL_STATE } from '@/app/dashboard/(pages)/ingredients/constants';
import { ACTION_TYPES } from '@/app/dashboard/(pages)/ingredients/enums';
import { IIngredientState } from '@/app/dashboard/(pages)/ingredients/interfaces';

export interface IActionType {
  type: ACTION_TYPES;
  payload?: any;
}

export const ingredientReducer = (
  state = INITIAL_STATE,
  action: IActionType,
): IIngredientState => {
  switch (action.type) {
    // Fetching Ingredients
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Creating an Ingredient
    case ACTION_TYPES.CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: [...state.ingredients, action.payload],
      };
    case ACTION_TYPES.CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Updating an Ingredient
    case ACTION_TYPES.UPDATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.id === action.payload.id ? action.payload : ingredient,
        ),
      };
    case ACTION_TYPES.UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Deleting an Ingredient
    case ACTION_TYPES.DELETE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload,
        ),
      };
    case ACTION_TYPES.DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
