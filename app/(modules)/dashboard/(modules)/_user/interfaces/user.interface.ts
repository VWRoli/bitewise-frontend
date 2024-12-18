import { TProfileInfoSchema } from '@/app/(modules)/dashboard/(modules)/profile/validations/profile-information.validation';

export interface IUser {
  id: number;
  email: string;
  personalInformation?: TProfileInfoSchema;
}
