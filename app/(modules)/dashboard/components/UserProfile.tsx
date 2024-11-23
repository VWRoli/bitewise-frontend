'use client';

import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { getFirstTwoCharacters } from '@/app/(modules)/dashboard/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const UserProfile = () => {
  const { user } = useUserContext();

  const avatarLetters = getFirstTwoCharacters(user.email);

  return (
    <div className="flex flex-col gap-4 items-center justify-center mb-16">
      <Avatar className="w-16 h-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{avatarLetters}</AvatarFallback>
      </Avatar>
      <div>{user.email}</div>
    </div>
  );
};

export default UserProfile;
