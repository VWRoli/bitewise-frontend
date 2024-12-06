import { z } from 'zod';

import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';

export const bmiSchema = z.object({
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
});
