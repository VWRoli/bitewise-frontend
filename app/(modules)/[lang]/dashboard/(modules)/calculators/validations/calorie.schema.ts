import {
  EActivityLevel,
  EGender,
} from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/enums';
import {
  MAX_AGE,
  MAX_HEIGHT,
  MAX_WEIGHT,
  MIN_AGE,
  MIN_HEIGHT,
  MIN_WEIGHT,
} from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/constants';

import { z } from 'zod';

export const calorieSchema = z.object({
  gender: z.nativeEnum(EGender),
  age: z
    .number()
    .min(MIN_AGE, `Age must be at least ${MIN_AGE} years`)
    .max(MAX_AGE, `Age cannot exceed ${MAX_AGE} years`)
    .int('Age must be an integer'),
  weight: z
    .number()
    .min(MIN_WEIGHT, `Weight must be at least ${MIN_WEIGHT} kg`)
    .max(MAX_WEIGHT, `Weight cannot exceed ${MAX_WEIGHT} kg`),
  height: z
    .number()
    .min(MIN_HEIGHT, `Height must be at least ${MIN_HEIGHT} cm`)
    .max(MAX_HEIGHT, `Height cannot exceed ${MAX_HEIGHT} cm`),
  activityLevel: z.nativeEnum(EActivityLevel),
});
