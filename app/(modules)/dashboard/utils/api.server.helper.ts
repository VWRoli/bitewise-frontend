'use server';

import { IApiResponse } from '@/app/(modules)/dashboard/interfaces';
import { getErrorMessage } from '@/app/(modules)/dashboard/utils/api.client.helper';
import { API_URL } from '@/app/common/config';
import { buildQueryParams } from '@/app/common/helpers';
import { IQueryParams } from '@/app/common/interfaces';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const accessToken = cookieStore.get('accessToken')?.value;

export async function apiRequest<T>(
  endpoint: string,
  method: string = 'GET',
  body?: any,
  params?: IQueryParams,
): Promise<IApiResponse<T>> {
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
      throw new Error(`${res.status} ${res.statusText}`);
    }

    if (res.status === 204) {
      return { data: undefined as T extends void ? undefined : T };
    }

    const data = await res.json();
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
