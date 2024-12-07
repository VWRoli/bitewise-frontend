'use client';

import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import { PropsWithChildren } from 'react';
import { UserContext } from '@/app/(modules)/dashboard/(modules)/_user/context';

interface IProps extends PropsWithChildren {
  user: IUser;
}

export const UserProvider: React.FC<IProps> = ({ user, children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
