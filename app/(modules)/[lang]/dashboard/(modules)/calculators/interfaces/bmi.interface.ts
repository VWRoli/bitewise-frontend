import { EGender } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/enums';

export interface IBmiValues {
  gender: EGender;
  age: number;
  weight: number;
  height: number;
}

export interface IBmiResults {
  bmi: number;
  bmiCategory: string;
}
