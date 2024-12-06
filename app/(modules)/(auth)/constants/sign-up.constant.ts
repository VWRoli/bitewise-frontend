import { ISignUp } from '@/app/(modules)/(auth)/interfaces';

export const defaultSignUpValues: ISignUp = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const PASSWORD_MIN_LENGTH = 8;
