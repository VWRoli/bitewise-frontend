import { IUserState } from '@/app/dashboard/(pages)/user/interfaces';

export const INITIAL_STATE: IUserState = {
  user: null,
  isError: false,
  isLoading: true,
};
