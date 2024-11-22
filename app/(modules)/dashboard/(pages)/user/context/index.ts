import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import React, { useContext } from 'react';

interface IDefaultValues {
  user: IUser;
}
const defaultValue: IDefaultValues = { user: { id: 0, email: '' } };

export const UserContext = React.createContext(defaultValue);

export const useUserContext = () => {
  return useContext(UserContext);
};
