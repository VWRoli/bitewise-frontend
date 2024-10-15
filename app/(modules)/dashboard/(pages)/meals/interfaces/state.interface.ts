import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMealState {
  meals: IMeal[];
  isLoading: boolean;
  isError: boolean;
}
