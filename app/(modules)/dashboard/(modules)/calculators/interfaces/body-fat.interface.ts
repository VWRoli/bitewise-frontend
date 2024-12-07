import { EGender } from '@/app/(modules)/dashboard/(modules)/calculators/enums';

export interface IBodyFatValues {
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
