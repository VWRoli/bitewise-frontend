import { IMealState } from '@/app/dashboard/(pages)/meals/interfaces';

export const INITIAL_STATE: IMealState = {
  meals: [],
  isError: false,
  isLoading: false,
};
