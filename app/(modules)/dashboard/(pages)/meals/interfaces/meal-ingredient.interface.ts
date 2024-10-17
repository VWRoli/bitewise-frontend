import { EUnit } from '@/app/(modules)/dashboard/(pages)/ingredients/enums';
import { ICreateMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

export interface IMealIngredient extends ICreateMealIngredient {
  id: number;
  ingredientName: string;
  calories: number;
  protein: number;
  totalCarbohydrates: number;
  dietaryFiber: number;
  sugar: number;
  totalFat: number;
  saturatedFat: number;
  deleteTimeStamp: null;
  name: string;
  price: number;
  unit: EUnit;
  updateTimeStamp: string;
  createTimeStamp: string;
  userId: number;
}
