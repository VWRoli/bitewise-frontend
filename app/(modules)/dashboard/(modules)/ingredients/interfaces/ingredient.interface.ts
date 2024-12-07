import { ICreateIngredient } from '@/app/(modules)/dashboard/(modules)/ingredients/interfaces';

export interface IIngredient extends ICreateIngredient {
  id: number;
  createTimeStamp: Date;
  updateTimeStamp: Date;
  deleteTimeStamp: Date | null;
}
