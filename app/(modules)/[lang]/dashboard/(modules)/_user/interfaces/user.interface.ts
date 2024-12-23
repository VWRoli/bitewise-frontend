import {
  TPersonalInfoSchema,
  TSocialProfilesSchema,
} from '@/app/(modules)/[lang]/dashboard/(modules)/profile/validations';

export interface IUser {
  id: number;
  email: string;
  personalInformation?: TPersonalInfoSchema;
  socialProfiles?: TSocialProfilesSchema;
}
