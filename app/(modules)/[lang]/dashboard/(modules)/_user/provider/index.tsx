'use client';

import { PropsWithChildren, useState } from 'react';

import { IUser } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/interfaces';
import { UserContext } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/context';

interface IProps extends PropsWithChildren {
  authUser: IUser;
}

export const UserProvider: React.FC<IProps> = ({ authUser, children }) => {
  const [user, setUser] = useState(authUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
