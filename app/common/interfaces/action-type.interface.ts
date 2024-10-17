import { ACTION_TYPES } from '@/app/common/enums';

export interface IActionType<T = unknown> {
  type: ACTION_TYPES;
  payload?: T;
}
