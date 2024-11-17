'use server';

import {
  ICreateIngredient,
  IIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { apiRequest } from '@/app/(modules)/dashboard/utils';
import { IQueryParams } from '@/app/common/interfaces';
import { revalidatePath } from 'next/cache';

export async function fetchIngredients(params: IQueryParams) {
  return apiRequest<{ data: IIngredient[]; count: number }>(
    'ingredient',
    'GET',
    undefined,
    params,
  );
}

export async function createIngredient(ingredient: ICreateIngredient) {
  const result = await apiRequest<IIngredient>(
    'ingredient',
    'POST',
    ingredient,
  );
  if (result.data) revalidatePath('/dashboard/ingredients');
  return result;
}

export async function updateIngredient(ingredient: IIngredient) {
  const result = await apiRequest<IIngredient>(
    `ingredient/${ingredient.id}`,
    'PATCH',
    ingredient,
  );
  if (result.data) revalidatePath('/dashboard/ingredients');
  return result;
}

export async function deleteIngredient(ingredientId: number) {
  const result = await apiRequest<null>(`ingredient/${ingredientId}`, 'DELETE');
  if (result.data) revalidatePath('/dashboard/ingredients');
  return result;
}
