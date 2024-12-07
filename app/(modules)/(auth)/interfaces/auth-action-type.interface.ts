import { EAuthActionType } from '@/app/(modules)/(auth)/enum';

export interface IAuthActionType<T = unknown> {
  type: EAuthActionType;
  payload?: T;
}
