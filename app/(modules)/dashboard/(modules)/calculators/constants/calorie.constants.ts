import {
  BMI_CALCULATOR_INPUTS,
  DEFAULT_BMI_VALUES,
} from '@/app/(modules)/dashboard/(modules)/calculators/constants/bmi.constants';

import { EActivityLevel } from '@/app/(modules)/dashboard/(modules)/calculators/enums';

export const CALORIE_CALCULATOR_INPUTS = BMI_CALCULATOR_INPUTS;

export const DEFAULT_CALORIE_VALUES = {
  ...DEFAULT_BMI_VALUES,
  activityLevel: EActivityLevel.MODERATE,
};
