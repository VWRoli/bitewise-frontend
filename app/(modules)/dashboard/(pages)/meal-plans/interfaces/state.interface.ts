import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';

export interface IMealPlanState {
  mealPlans: IMealPlan[];
  isLoading: boolean;
  isError: boolean;
}
