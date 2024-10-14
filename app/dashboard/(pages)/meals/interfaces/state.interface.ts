import { IMeal } from '@/app/dashboard/(pages)/meals/interfaces';

export interface IMealState {
  meals: IMeal[];
  isLoading: boolean;
  isError: boolean;
}
