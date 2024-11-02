import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';

export interface IBodyFatValues {
  [key: string]: any;
  gender: EGender;
  age: number;
  weight: number;
  height: number;
  neck: number;
  waist: number;
  hip: number;
}

export interface IBodyFatResults {
  bodyFatPercentage: number;
  bodyFatCategory: string;
  bodyFatMass: number;
  leanBodyMass: number;
  bmiBodyFatResult: number;
}
