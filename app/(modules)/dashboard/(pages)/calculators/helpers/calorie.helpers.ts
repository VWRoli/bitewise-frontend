import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import {
  ICalorieResults,
  ICalorieValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';

// Mifflin-St Jeor formula
export function calculateBMR(input: ICalorieValues): number {
  let bmr: number;
  if (input.gender === EGender.MALE) {
    bmr = 10 * input.weight + 6.25 * input.height - 5 * input.age + 5;
  } else {
    bmr = 10 * input.weight + 6.25 * input.height - 5 * input.age - 161;
  }

  return bmr;
}

export function calculateTotalCalories(input: ICalorieValues): number {
  const bmr = calculateBMR(input);

  // Adjust BMR based on activity level
  let activityMultiplier: number;

  switch (input.activityLevel) {
    case 'bmr':
      activityMultiplier = 1;
      break;
    case 'sedentary':
      activityMultiplier = 1.2;
      break;
    case 'light':
      activityMultiplier = 1.375;
      break;
    case 'moderate':
      activityMultiplier = 1.465;
      break;
    case 'active':
      activityMultiplier = 1.55;
      break;
    case 'very_active':
      activityMultiplier = 1.725;
      break;
    case 'extra_active':
      activityMultiplier = 1.9;
    default:
      throw new Error('Invalid activity level');
  }

  const totalCalories = bmr * activityMultiplier;

  return Math.round(totalCalories);
}

export function calculateWeightChangeCalories(
  input: ICalorieValues,
): ICalorieResults {
  const totalCalories = calculateTotalCalories(input);

  const weightLoss = {
    maintainWeight: totalCalories, // 100% (maintain weight)
    mildWeightLoss: totalCalories - 250, // 90% (mild weight loss)
    weightLoss: totalCalories - 500, // 79% (weight loss)
    extremeWeightLoss: totalCalories - 1000, // 59% (extreme weight loss)
  };

  const weightGain = {
    mildWeightGain: totalCalories + 250, // 110% (mild weight gain)
    weightGain: totalCalories + 500, // 121% (weight gain)
    extremeWeightGain: totalCalories + 1000, // 141% (fast weight gain)
  };

  return {
    ...weightLoss,
    ...weightGain,
  };
}
