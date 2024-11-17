'use server';

import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import { apiRequest } from '@/app/(modules)/dashboard/utils';

export async function fetchUser() {
  return apiRequest<IUser>('users/me', 'GET');
}
