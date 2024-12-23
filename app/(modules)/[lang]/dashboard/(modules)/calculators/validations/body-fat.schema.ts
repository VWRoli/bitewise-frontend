import {
  MAX_AGE,
  MAX_HEIGHT,
  MAX_HIP,
  MAX_NECK,
  MAX_WAIST,
  MAX_WEIGHT,
  MIN_AGE,
  MIN_HEIGHT,
  MIN_HIP,
  MIN_NECK,
  MIN_WAIST,
  MIN_WEIGHT,
} from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/constants';

import { EGender } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/enums';
import { z } from 'zod';

export const bodyFatSchema = z.object({
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
  neck: z
    .number()
    .min(MIN_NECK, `Neck circumference must be at least ${MIN_NECK} cm`)
    .max(MAX_NECK, `Neck circumference cannot exceed ${MAX_NECK} cm`),
  waist: z
    .number()
    .min(MIN_WAIST, `Waist circumference must be at least ${MIN_WAIST} cm`)
    .max(MAX_WAIST, `Waist circumference cannot exceed ${MAX_WAIST} cm`),
  hip: z
    .number()
    .min(MIN_HIP, `Hip circumference must be at least ${MIN_HIP} cm`)
    .max(MAX_HIP, `Hip circumference cannot exceed ${MAX_HIP} cm`),
});
