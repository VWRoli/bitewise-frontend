import { ICreateIngredient } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/interfaces';

export interface IIngredient extends ICreateIngredient {
  id: number;
  createTimeStamp: Date;
  updateTimeStamp: Date;
  deleteTimeStamp: Date | null;
}
