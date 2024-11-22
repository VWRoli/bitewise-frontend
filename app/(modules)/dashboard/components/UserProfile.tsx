import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { getFirstTwoCharacters } from '@/app/(modules)/dashboard/utils';
import CustomError from '@/app/common/components/Error';
import { IError } from '@/app/common/interfaces/error.interface';
import { Avatar } from '@mui/material';
import React from 'react';

const UserProfile = async () => {
  const result = await fetchMe();

  if (result.error) {
    return (
      <div className="p-2 md:p-4 xl:p-8 mt-8">
        <section className="flex flex-col gap-4">
          <CustomError result={result as IError} />;
        </section>
      </div>
    );
  }
  const avatarLetters = getFirstTwoCharacters(result.data?.email);

  return (
    <div className="flex flex-col gap-4 items-center justify-center mb-16">
      <Avatar className="h-16 w-16 uppercase">{avatarLetters}</Avatar>
      <div>{result.data?.email}</div>
    </div>
  );
};

export default UserProfile;
