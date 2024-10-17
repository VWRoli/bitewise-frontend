import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { EXTENDED_MEAL_ACTION_TYPES } from '@/app/(modules)/dashboard/(pages)/meals/enums';
import {
  IMeal,
  IMealActionType,
  IMealState,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export const mealReducer = (
  state = INITIAL_STATE,
  action: IMealActionType,
): IMealState => {
  switch (action.type) {
    // Fetching Meals
    case EXTENDED_MEAL_ACTION_TYPES.FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case EXTENDED_MEAL_ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: action.payload as IMeal[],
      };
    case EXTENDED_MEAL_ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Creating a Meal
    case EXTENDED_MEAL_ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: [...state.meals, action.payload] as IMeal[],
      };
    case EXTENDED_MEAL_ACTION_TYPES.CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Updating a Meal
    case EXTENDED_MEAL_ACTION_TYPES.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: state.meals.map((meal) =>
          meal.id === (action.payload as IMeal).id ? action.payload : meal,
        ) as IMeal[],
      };
    case EXTENDED_MEAL_ACTION_TYPES.UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Deleting an Meal
    case EXTENDED_MEAL_ACTION_TYPES.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: state.meals.filter((meal) => meal.id !== action.payload),
      };
    case EXTENDED_MEAL_ACTION_TYPES.DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // Enriching Meals
    case EXTENDED_MEAL_ACTION_TYPES.ENRICH_SUCCESS:
      return {
        ...state,
        meals: action.payload as IMeal[],
      };
    default:
      return state;
  }
};
