import { DEFAULT_PERSONAL_INFORMATION } from '@/app/(modules)/dashboard/(modules)/profile/constants';
import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import { TPersonalInfoSchema } from '@/app/(modules)/dashboard/(modules)/profile/validations/personal-information.validation';

export const getDefaultDateOfBirth = (
  dateOfBirth: Date | undefined,
): Date | undefined => {
  if (!dateOfBirth) return undefined;
  return new Date(dateOfBirth);
};

export const getDefaultValues = (user: IUser): TPersonalInfoSchema => {
  return user?.personalInformation
    ? {
        ...user.personalInformation,
        dateOfBirth: getDefaultDateOfBirth(
          user.personalInformation.dateOfBirth,
        ),
      }
    : DEFAULT_PERSONAL_INFORMATION;
};
