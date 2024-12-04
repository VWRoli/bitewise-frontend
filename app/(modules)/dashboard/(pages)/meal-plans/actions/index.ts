'server-only';
'use server';

import {
  ICreateMealPlan,
  IMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { apiRequest } from '@/app/(modules)/dashboard/utils';
import { IQueryParams } from '@/app/utils/interfaces';
import { revalidatePath } from 'next/cache';

export async function fetchMealPlans(params: IQueryParams) {
  return apiRequest<{ data: IMealPlan[]; count: number }>(
    'meal-plan',
    'GET',
    undefined,
    params,
  );
}

export async function createMealPlan(mealPlan: ICreateMealPlan) {
  const result = await apiRequest<IMealPlan>('meal-plan', 'POST', mealPlan);
  if (result.data) revalidatePath('/dashboard/meal-plans');
  return result;
}

export async function updateMealPlan(
  mealPlan: ICreateMealPlan,
  mealPlanId: number,
) {
  const result = await apiRequest<IMealPlan>(
    `meal-plan/${mealPlanId}`,
    'PATCH',
    mealPlan,
  );
  if (result.data) revalidatePath('/dashboard/meal-plans');
  return result;
}

export async function deleteMealPlan(mealPlanId: number) {
  const result = await apiRequest<null>(`meal-plan/${mealPlanId}`, 'DELETE');
  if (result) revalidatePath('/dashboard/meal-plans');
  return result;
}
