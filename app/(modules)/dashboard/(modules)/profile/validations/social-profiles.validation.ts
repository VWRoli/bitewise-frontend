import { z } from 'zod';

export const socialProfilesSchema = z.object({
  facebook: z.union([z.literal(''), z.string().trim().url()]),
  twitter: z.union([z.literal(''), z.string().trim().url()]),
  instagram: z.union([z.literal(''), z.string().trim().url()]),
  linkedin: z.union([z.literal(''), z.string().trim().url()]),
});

export type TSocialProfilesSchema = z.infer<typeof socialProfilesSchema>;
