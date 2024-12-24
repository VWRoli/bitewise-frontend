import { z } from 'zod';

export const createNotificationSettingsSchema = (
  dictionary: Record<string, string>,
) =>
  z.object({
    defaultEmailAddress: z
      .string()
      .email(dictionary['emailInvalid'])
      .optional(),
    communicationEmails: z.boolean().optional(),
    marketingEmails: z.boolean().optional(),
    secutiryEmails: z.boolean().optional(),
  });

export type TNotificationSettingsSchema = z.infer<
  ReturnType<typeof createNotificationSettingsSchema>
>;
