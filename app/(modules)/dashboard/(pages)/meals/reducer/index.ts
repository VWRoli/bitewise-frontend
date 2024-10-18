import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import {
  IMeal,
  IMealState,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { ACTION_TYPES } from '@/app/common/enums';
import { IActionType } from '@/app/common/interfaces';

export const mealReducer = (
  state = INITIAL_STATE,
  action: IActionType,
): IMealState => {
  switch (action.type) {
    // Fetching Meals
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
        meals: action.payload as IMeal[],
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Creating a Meal
    case ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: [...state.meals, action.payload] as IMeal[],
      };
    case ACTION_TYPES.CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Updating a Meal
    case ACTION_TYPES.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: state.meals.map((meal) =>
          meal.id === (action.payload as IMeal).id ? action.payload : meal,
        ) as IMeal[],
      };
    case ACTION_TYPES.UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Deleting an Meal
    case ACTION_TYPES.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: state.meals.filter((meal) => meal.id !== action.payload),
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
