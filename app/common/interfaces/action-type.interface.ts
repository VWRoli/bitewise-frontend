import { ACTION_TYPES } from '@/app/common/enums';

export interface IActionType {
  type: ACTION_TYPES;
  payload?: any;
}
