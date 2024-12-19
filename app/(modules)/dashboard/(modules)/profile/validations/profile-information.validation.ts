import { z } from 'zod';

export const profileInformationSchema = z.object({
  userName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.date().optional(),
});

export type TProfileInfoSchema = z.infer<typeof profileInformationSchema>;
