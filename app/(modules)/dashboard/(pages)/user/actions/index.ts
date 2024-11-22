import { apiRequest } from '@/app/(modules)/dashboard/utils';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';

export async function fetchMe() {
  return apiRequest<IUser>('users/me', 'GET');
}
