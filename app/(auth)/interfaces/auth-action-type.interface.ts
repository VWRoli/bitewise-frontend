import { AUTH_ACTION_TYPES } from '@/app/(auth)/enum';

export interface IAuthActionType {
  type: AUTH_ACTION_TYPES;
  payload?: any;
}
