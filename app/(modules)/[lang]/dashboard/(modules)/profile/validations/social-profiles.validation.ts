import { z } from 'zod';

export const socialProfilesSchema = z.object({
  facebook: z.string().url().optional().or(z.literal('')),
  twitter: z.string().url().optional().or(z.literal('')),
  instagram: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().url().optional().or(z.literal('')),
});

export type TSocialProfilesSchema = z.infer<typeof socialProfilesSchema>;
