'use client';

import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { getFirstTwoCharacters } from '@/app/(modules)/dashboard/utils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import React from 'react';

const UserProfile = () => {
  const { user } = useUserContext();

  const avatarLetters = getFirstTwoCharacters(user.email);

  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{avatarLetters}</AvatarFallback>
      </Avatar>
      <div>{user.email}</div>
    </div>
  );
};

export default UserProfile;
