import { ICreateMeal } from '@/app/dashboard/(pages)/meals/interfaces';

export interface IMeal extends ICreateMeal {
  id: number;
  createTimeStamp: Date;
  updateTimeStamp: Date;
  deleteTimeStamp: Date | null;
}
