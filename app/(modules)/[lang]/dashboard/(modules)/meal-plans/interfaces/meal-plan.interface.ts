import { ICreateMealPlan } from '@/app/(modules)/[lang]/dashboard/(modules)/meal-plans/interfaces';
import { IMeal } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';

export interface IMealPlan extends ICreateMealPlan {
  id: number;
  meals: IMeal[];
}
