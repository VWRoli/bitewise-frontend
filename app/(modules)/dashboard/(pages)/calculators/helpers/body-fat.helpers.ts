import { BODY_FAT_CATEGORIES } from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { calculateBMI } from '@/app/(modules)/dashboard/(pages)/calculators/helpers';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { toast } from '@/app/hooks/use-toast';

export function calculateBodyFatPercentage(values: IBodyFatValues): number {
  const { gender, height, neck, waist, hip } = values;
  let bodyFatPercentage;

  if (gender === EGender.MALE) {
    // Formula for men
    bodyFatPercentage =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
  } else if (gender === EGender.FEMALE) {
    // Formula for women (requires hip measurement)
    if (hip === 0) {
      toast({
        variant: 'error',
        description:
          'Hip measurement is required for calculating female body fat percentage.',
      });
      return 0;
    }
    bodyFatPercentage =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  } else {
    toast({
      variant: 'error',
      description: "Gender must be 'male' or 'female'.",
    });
    return 0;
  }

  return Math.round(bodyFatPercentage * 10) / 10;
}

export function calculateBodyFatWithBMI(values: IBodyFatValues): number {
  const { weight, height, age, gender } = values;
  const bmi = calculateBMI(weight, height);

  let bodyFatPercentage;

  if (gender === 'male' && age >= 18) {
    // Adult male formula
    bodyFatPercentage = 1.2 * bmi + 0.23 * age - 16.2;
  } else if (gender === 'female' && age >= 18) {
    // Adult female formula
    bodyFatPercentage = 1.2 * bmi + 0.23 * age - 5.4;
  } else if (gender === 'male' && age < 18) {
    // Boys formula
    bodyFatPercentage = 1.51 * bmi - 0.7 * age - 2.2;
  } else if (gender === 'female' && age < 18) {
    // Girls formula
    bodyFatPercentage = 1.51 * bmi - 0.7 * age + 1.4;
  } else {
    toast({
      variant: 'error',
      description: 'Invalid input for gender or age',
    });
    return 0;
  }

  return Math.round(bodyFatPercentage * 10) / 10;
}

export function categorizeBodyFat(
  gender: EGender,
  bodyFatPercentage: number,
): string {
  const categories = BODY_FAT_CATEGORIES[gender];

  if (!categories) {
    toast({
      variant: 'error',
      description: `Invalid gender. Choose 'FEMALE' or 'MALE'.`,
    });
    return 'Unknown Category';
  }

  const category = categories.find(
    (range) => bodyFatPercentage >= range.min && bodyFatPercentage <= range.max,
  );
  return category ? category.category : 'Unknown Category';
}

export function calculateBodyFatMass(
  bodyWeight: number,
  bodyFatPercentage: number,
): number {
  const result = bodyWeight * (bodyFatPercentage / 100);

  return Math.round(result * 10) / 10;
}

export function calculateLeanBodyMass(
  bodyWeight: number,
  bodyFatPercentage: number,
): number {
  const bodyFatMass = calculateBodyFatMass(bodyWeight, bodyFatPercentage);
  const result = bodyWeight - bodyFatMass;

  return Math.round(result * 10) / 10;
}
