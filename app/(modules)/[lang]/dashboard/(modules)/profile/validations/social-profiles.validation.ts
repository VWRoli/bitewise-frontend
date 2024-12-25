import { z } from 'zod';

export const createSocialProfilesSchema = (
  dictionary: Record<string, string>,
) =>
  z.object({
    facebook: z
      .string()
      .url(dictionary['invalidUrl'])
      .optional()
      .or(z.literal('')),
    twitter: z
      .string()
      .url(dictionary['invalidUrl'])
      .optional()
      .or(z.literal('')),
    instagram: z
      .string()
      .url(dictionary['invalidUrl'])
      .optional()
      .or(z.literal('')),
    linkedin: z
      .string()
      .url(dictionary['invalidUrl'])
      .optional()
      .or(z.literal('')),
  });

export type TSocialProfilesSchema = z.infer<
  ReturnType<typeof createSocialProfilesSchema>
>;
