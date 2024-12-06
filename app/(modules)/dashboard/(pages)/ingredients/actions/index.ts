'server-only';
'use server';

import {
  ICreateIngredient,
  IIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { apiRequest } from '@/app/utils/helpers';
import { IQueryParams } from '@/app/utils/interfaces';
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

export async function updateIngredient(
  ingredient: ICreateIngredient,
  ingredientId: number,
) {
  const result = await apiRequest<IIngredient>(
    `ingredient/${ingredientId}`,
    'PATCH',
    ingredient,
  );
  if (result.data) revalidatePath('/dashboard/ingredients');
  return result;
}

export async function deleteIngredient(ingredientId: number) {
  const result = await apiRequest<void>(`ingredient/${ingredientId}`, 'DELETE');
  if (result) revalidatePath('/dashboard/ingredients');
  return result;
}
