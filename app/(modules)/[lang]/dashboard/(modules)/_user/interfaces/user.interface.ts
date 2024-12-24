import {
  TPersonalInfoSchema,
  TSocialProfilesSchema,
} from '@/app/(modules)/[lang]/dashboard/(modules)/profile/validations';

import { TNotificationSettingsSchema } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/validations/notification-settings.validation';

export interface IUser {
  id: number;
  email: string;
  personalInformation?: TPersonalInfoSchema;
  socialProfiles?: TSocialProfilesSchema;
  notificationSettings?: TNotificationSettingsSchema;
}
