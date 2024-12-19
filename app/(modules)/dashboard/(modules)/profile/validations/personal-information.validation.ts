import { z } from 'zod';

export const personalInformationSchema = z.object({
  userName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.date().optional(),
});

export type TPersonalInfoSchema = z.infer<typeof personalInformationSchema>;
