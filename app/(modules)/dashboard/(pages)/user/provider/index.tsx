'use client';

import { PropsWithChildren } from 'react';

import { UserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';

interface IProps extends PropsWithChildren {
  user: IUser;
}

export const UserProvider: React.FC<IProps> = ({ user, children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
