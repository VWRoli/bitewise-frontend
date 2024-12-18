import { z } from 'zod';

export const profileInformationSchema = z.object({
  userName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  // dateOfBirth: z
  //   .string()
  //   .regex(/^\d{4}-\d{2}-\d{2}$/)
  //   .optional(), //TODO: Matches 'YYYY-MM-DD' format
});

export type TProfileInfoSchema = z.infer<typeof profileInformationSchema>;
