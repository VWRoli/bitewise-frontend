import { ICreateMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMealPlan extends ICreateMealPlan {
  id: number;
  meals: IMeal[];
}
