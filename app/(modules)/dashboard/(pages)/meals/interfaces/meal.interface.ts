import { ICreateMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMeal extends ICreateMeal {
  id: number;
  createTimeStamp: Date;
  updateTimeStamp: Date;
  deleteTimeStamp: Date | null;
}
