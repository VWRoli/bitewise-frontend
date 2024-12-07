import { IUser } from '@/app/(modules)/dashboard/(modules)/user/interfaces';
import { apiRequest } from '@/app/utils/helpers';

export async function fetchMe() {
  return apiRequest<IUser>('users/me', 'GET');
}
