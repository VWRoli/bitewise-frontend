'use server';

import {
  ICreateIngredient,
  IIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { API_URL } from '@/app/common/config';
import { IError } from '@/app/common/interfaces/error.interface';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const accessToken = cookieStore.get('accessToken')?.value;

//TODO: this type
type FetchIngredientsResult =
  | { data: IIngredient[]; error?: undefined }
  | IError;

export async function fetchIngredients(): Promise<FetchIngredientsResult> {
  try {
    const res = await fetch(`${API_URL}/ingredient`, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data: IIngredient[] = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function createIngredient(ingredient: ICreateIngredient) {
  try {
    const res = await fetch(`${API_URL}/ingredient`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(ingredient),
    });

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data: IIngredient = await res.json();

    revalidatePath('/dashboard/ingredients');

    return { data };
  } catch (err) {
    //TODO: proper error handing
    const error = JSON.parse(JSON.stringify(err));

    return { error };
  }
}
export async function updateIngredient(ingredient: IIngredient) {
  try {
    const res = await fetch(`${API_URL}/ingredient/${ingredient.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    revalidatePath('/dashboard/ingredients');
  } catch (error) {
    return { error };
  }
}

export async function deleteIngredient(ingredientId: number) {
  //TODO: validate input with zod or yup?
  try {
    const res = await fetch(`${API_URL}/ingredient/${ingredientId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    revalidatePath('/dashboard/ingredients');
  } catch (error) {
    return { error };
  }
}
