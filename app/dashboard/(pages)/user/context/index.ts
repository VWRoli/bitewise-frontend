import { IAuthActionType } from '@/app/(auth)/interfaces';
import { INITIAL_STATE } from '@/app/dashboard/(pages)/user/constants';
import { IUserState } from '@/app/dashboard/(pages)/user/interfaces';
import React, { useContext } from 'react';

interface ValueTypes {
  state: IUserState;
  dispatch: React.Dispatch<IAuthActionType>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
};

export const UserContext = React.createContext(defaultValue);

export const useUserContext = () => {
  return useContext(UserContext);
};
