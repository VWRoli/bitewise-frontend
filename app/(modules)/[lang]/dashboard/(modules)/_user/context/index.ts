import React, { useContext } from 'react';

import { IUser } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/interfaces';

interface IDefaultValues {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
const defaultValue: IDefaultValues = {
  user: { id: 0, email: '' },
  setUser: () => {},
};

export const UserContext = React.createContext(defaultValue);

export const useUserContext = () => {
  return useContext(UserContext);
};
