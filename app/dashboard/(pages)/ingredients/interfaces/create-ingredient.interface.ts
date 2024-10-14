import { EUnit } from '@/app/dashboard/(pages)/ingredients/enums';

export interface ICreateIngredient {
  name: string;
  protein: number;
  totalFat: number;
  saturatedFat: number;
  totalCarbohydrates: number;
  sugar: number;
  dietaryFiber: number;
  calories: number;
  price: number;
  unit: EUnit;
  userId: number;
}
