import { DEFAULT_PERSONAL_INFORMATION } from '@/app/(modules)/dashboard/(modules)/profile/constants';
import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import { TProfileInfoSchema } from '@/app/(modules)/dashboard/(modules)/profile/validations/profile-information.validation';

export const getDefaultDateOfBirth = (
  dateOfBirth: Date | undefined,
): Date | undefined => {
  if (!dateOfBirth) return undefined;
  return new Date(dateOfBirth);
};

export const getDefaultValues = (user: IUser): TProfileInfoSchema => {
  return user?.personalInformation
    ? {
        ...user.personalInformation,
        dateOfBirth: getDefaultDateOfBirth(
          user.personalInformation.dateOfBirth,
        ),
      }
    : DEFAULT_PERSONAL_INFORMATION;
};
