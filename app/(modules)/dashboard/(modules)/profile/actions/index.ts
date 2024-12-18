'use server';
'server-only';

import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import { apiRequest } from '@/app/utils/helpers';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function deleteUser() {
  await apiRequest<void>(`users/me`, 'DELETE');

  const cookieStore = cookies();

  cookieStore.set('accessToken', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0,
  });
  redirect('/login');
}

export async function updateUser(user: Partial<IUser>) {
  const result = await apiRequest<IUser>(`users/me`, 'PATCH', user);

  return result;
}
