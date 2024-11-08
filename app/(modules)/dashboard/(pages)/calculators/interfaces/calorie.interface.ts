import { EActivityLevel } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { IBmiValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';

export interface ICalorieValues extends IBmiValues {
  activityLevel: EActivityLevel;
}

export interface ICalorieResults {
  maintainWeight: number;
  mildWeightLoss: number;
  weightLoss: number;
  extremeWeightLoss: number;
  mildWeightGain: number;
  weightGain: number;
  extremeWeightGain: number;
}
