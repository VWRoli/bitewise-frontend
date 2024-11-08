import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';

export interface IBmiValues {
  [key: string]: any;
  gender: EGender;
  age: number;
  weight: number;
  height: number;
}

export interface IBmiResults {
  bmi: number;
  bmiCategory: string;
}
