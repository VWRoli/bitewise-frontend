'server-only';
'use server';

import { buildQueryParams, getErrorMessage } from '@/app/utils/helpers';

import { API_URL } from '@/app/utils/config';
import { IApiResponse } from '@/app/(modules)/dashboard/interfaces';
import { IQueryParams } from '@/app/utils/interfaces';
import { cookies } from 'next/headers';

export async function apiRequest<T>(
  endpoint: string,
  method: string = 'GET',
  body?: any,
  params?: IQueryParams,
): Promise<IApiResponse<T>> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  try {
    if (!accessToken) {
      throw new Error('Unauthorized');
    }

    const queryString = params ? `?${buildQueryParams(params)}` : '';
    const url = `${API_URL}/${endpoint}${queryString}`;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: method === 'GET' ? 'no-store' : undefined,
    });

    if (!res.ok) {
      const errorMessage = await getErrorMessage(res);

      throw new Error(errorMessage);
    }
    // eslint-disable-next-line
    if (res.status === 204) {
      return { data: undefined as T extends void ? undefined : T };
    }

    const data = await res.json();
    return { data };
  } catch (error: unknown) {
    throw error;
  }
}
