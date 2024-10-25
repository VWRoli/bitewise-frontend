import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meal-plans/constants';
import {
  IMealPlan,
  IMealPlanState,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { ACTION_TYPES } from '@/app/common/enums';
import { IActionType } from '@/app/common/interfaces';

export const mealPlanReducer = (
  state = INITIAL_STATE,
  action: IActionType,
): IMealPlanState => {
  switch (action.type) {
    // Fetching MealPlans
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
        mealPlans: action.payload as IMealPlan[],
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Creating a MealPlan
    case ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mealPlans: [...state.mealPlans, action.payload] as IMealPlan[],
      };
    case ACTION_TYPES.CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Updating a MealPlan
    case ACTION_TYPES.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mealPlans: state.mealPlans.map((mealPlan) =>
          mealPlan.id === (action.payload as IMealPlan).id
            ? action.payload
            : mealPlan,
        ) as IMealPlan[],
      };
    case ACTION_TYPES.UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Deleting a MealPlan
    case ACTION_TYPES.DELETE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        mealPlans: state.mealPlans.filter(
          (mealPlan) => mealPlan.id !== action.payload,
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
