import { EXTENDED_MEAL_ACTION_TYPES } from '@/app/(modules)/dashboard/(pages)/meals/enums';

export interface IMealActionType<T = unknown> {
  type: EXTENDED_MEAL_ACTION_TYPES;
  payload?: T;
}
