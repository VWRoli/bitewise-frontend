import { IMealPlanState } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';

export const INITIAL_STATE: IMealPlanState = {
  mealPlans: [],
  isError: false,
  isLoading: false,
};
