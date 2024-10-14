import { ICreateIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';

export interface IIngredient extends ICreateIngredient {
  id: number;
  createTimeStamp: Date;
  updateTimeStamp: Date;
  deleteTimeStamp: Date | null;
}
