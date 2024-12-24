'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';
import { Edit } from 'lucide-react';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useUserContext } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/context';

const BasicInfo = () => {
  const dict = useDictionary();
  const { user } = useUserContext();

  return (
    <Card className="flex w-full items-center justify-between p-6">
      <div className="flex items-center">
        <Avatar className="size-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <AvatarImage src="https://github.com/shadcn.png" />
          </AvatarFallback>
        </Avatar>

        <CardHeader>
          <CardTitle className="flex items-center justify-between font-medium">
            {user?.personalInformation?.firstName}{' '}
            {user?.personalInformation?.lastName}
          </CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
      </div>
      <div>
        <Button variant="outline">
          <Edit /> {dict.common.edit}
        </Button>
      </div>
    </Card>
  );
};

export default BasicInfo;
