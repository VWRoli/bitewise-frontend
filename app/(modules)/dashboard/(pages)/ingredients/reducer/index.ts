import { ACTION_TYPES } from '@/app/common/enums';
import { IActionType } from '@/app/common/interfaces';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { IIngredientState } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';

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
