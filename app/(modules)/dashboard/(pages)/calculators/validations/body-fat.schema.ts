import { z } from 'zod';

import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';

export const bodyFatSchema = z.object({
  gender: z.nativeEnum(EGender),
  age: z
    .number()
    .min(10, 'Age must be at least 10 years')
    .max(120, 'Age cannot exceed 120 years')
    .int('Age must be an integer'),
  weight: z
    .number()
    .min(30, 'Weight must be at least 30 kg')
    .max(300, 'Weight cannot exceed 300 kg'),
  height: z
    .number()
    .min(50, 'Height must be at least 50 cm')
    .max(250, 'Height cannot exceed 250 cm'),
  neck: z
    .number()
    .min(20, 'Neck circumference must be at least 20 cm')
    .max(70, 'Neck circumference cannot exceed 70 cm'),
  waist: z
    .number()
    .min(50, 'Waist circumference must be at least 50 cm')
    .max(200, 'Waist circumference cannot exceed 200 cm'),
  hip: z
    .number()
    .min(50, 'Hip circumference must be at least 50 cm')
    .max(200, 'Hip circumference cannot exceed 200 cm'),
});
