import { EActivityLevel } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/enums';
import { IBmiValues } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/interfaces';

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
