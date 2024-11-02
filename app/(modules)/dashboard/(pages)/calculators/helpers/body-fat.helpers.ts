import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { toaster } from '@/app/common/components/CustomToast';

export function calculateBodyFatPercentage(values: IBodyFatValues) {
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
      toaster.error({
        text: 'Hip measurement is required for calculating female body fat percentage.',
      });
      return;
    }
    bodyFatPercentage =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  } else {
    toaster.error({
      text: "Gender must be 'male' or 'female'.",
    });
    return;
  }

  return bodyFatPercentage.toFixed(2);
}
