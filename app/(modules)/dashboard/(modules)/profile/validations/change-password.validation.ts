import { PASSWORD_MIN_LENGTH } from '@/app/(modules)/(auth)/constants';
import { PASSWORD_VALIDATION_MESSAGES } from '@/app/(modules)/dashboard/(modules)/profile/constants';
import { z } from 'zod';

export const changePasswordSchema = z
  .object({
    oldPassword: z.string(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, PASSWORD_VALIDATION_MESSAGES.minLength)
      .regex(/[A-Z]/, PASSWORD_VALIDATION_MESSAGES.uppercase)
      .regex(/[a-z]/, PASSWORD_VALIDATION_MESSAGES.lowercase)
      .regex(/\d/, PASSWORD_VALIDATION_MESSAGES.number)
      .min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;
