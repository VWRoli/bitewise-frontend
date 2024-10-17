import { AUTH_ACTION_TYPES } from '@/app/(modules)/(auth)/enum';

export interface IAuthActionType<T = unknown> {
  type: AUTH_ACTION_TYPES;
  payload?: T;
}
