'server-only';
'use server';

import { revalidatePath } from 'next/cache';

import {
  ICreateMeal,
  IMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { apiRequest } from '@/app/utils/helpers';
import { IQueryParams } from '@/app/utils/interfaces';

export async function fetchMeals(params: IQueryParams) {
  return apiRequest<{ data: IMeal[]; count: number }>(
    'meal',
    'GET',
    undefined,
    params,
  );
}

export async function createMeal(meal: ICreateMeal) {
  const result = await apiRequest<IMeal>('meal', 'POST', meal);
  if (result.data) revalidatePath('/dashboard/meals');
  return result;
}

export async function updateMeal(meal: ICreateMeal, mealId: number) {
  const result = await apiRequest<IMeal>(`meal/${mealId}`, 'PATCH', meal);
  if (result.data) revalidatePath('/dashboard/meals');
  return result;
}

export async function deleteMeal(mealId: number) {
  const result = await apiRequest<null>(`meal/${mealId}`, 'DELETE');
  if (result) revalidatePath('/dashboard/meals');
  return result;
}
