import { z } from 'zod';

export const createNotificationSettingsSchema = (
  dictionary: Record<string, string>,
) =>
  z.object({
    defaultEmailAddress: z
      .string()
      .email(dictionary['emailInvalid'])
      .optional(),
    communicationEmail: z.boolean().optional(),
    marketingEmail: z.boolean().optional(),
    securityEmail: z.boolean().optional(),
  });

export type TNotificationSettingsSchema = z.infer<
  ReturnType<typeof createNotificationSettingsSchema>
>;
