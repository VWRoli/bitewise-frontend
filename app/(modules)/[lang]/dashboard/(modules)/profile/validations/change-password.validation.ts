import { PASSWORD_MIN_LENGTH } from '@/app/(modules)/(auth)/constants';
import { z } from 'zod';

export const createChangePasswordSchema = (
  dictionary: Record<string, string>,
) =>
  z
    .object({
      oldPassword: z.string().min(1, dictionary['oldPasswordRequired']),
      password: z
        .string()
        .min(PASSWORD_MIN_LENGTH, dictionary['passwordMinLength'])
        .regex(/[A-Z]/, dictionary['passwordUppercase'])
        .regex(/[a-z]/, dictionary['passwordLowercase'])
        .regex(/\d/, dictionary['passwordNumberRequired']),
      confirmPassword: z.string().min(1, dictionary['confirmPasswordRequired']),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: dictionary['passwordsMustMatch'],
      path: ['confirmPassword'],
    });

export type TChangePasswordSchema = z.infer<
  ReturnType<typeof createChangePasswordSchema>
>;
