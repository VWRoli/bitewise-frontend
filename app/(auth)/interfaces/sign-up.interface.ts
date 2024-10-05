import { ISignIn } from '@/app/(auth)/interfaces/sign-in.interface';

export interface ISignUp extends ISignIn {
  confirmPassword: string;
}
