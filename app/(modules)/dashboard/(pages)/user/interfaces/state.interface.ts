import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces/user.interface';

export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  isError: boolean;
}
