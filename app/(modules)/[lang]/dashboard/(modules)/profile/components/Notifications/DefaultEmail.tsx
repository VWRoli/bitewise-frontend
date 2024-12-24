'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit, Save } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import Typography from '@/app/components/Typography';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useState } from 'react';
import { useUserContext } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/context';

const DefaultEmail = () => {
  const { common, profile } = useDictionary();
  const { user } = useUserContext();

  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card className="relative">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{profile.notifications.defaultEmail}</CardTitle>
          <CardDescription>
            {profile.notifications.defaultEmailDesc}
          </CardDescription>
        </div>
        <Button
          variant="outline"
          type={'button'}
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {!isEditable && <Edit />}
          {isEditable ? common.cancel : common.edit}
        </Button>
      </CardHeader>
      <CardContent>
        <Typography>{user?.email}</Typography>
        {isEditable && (
          <Button className="absolute bottom-6 right-6" type="submit">
            <Save /> {common.save}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DefaultEmail;
