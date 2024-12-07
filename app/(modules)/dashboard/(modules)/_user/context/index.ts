import React, { useContext } from 'react';

import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';

interface IDefaultValues {
  user: IUser;
}
const defaultValue: IDefaultValues = { user: { id: 0, email: '' } };

export const UserContext = React.createContext(defaultValue);

export const useUserContext = () => {
  return useContext(UserContext);
};
