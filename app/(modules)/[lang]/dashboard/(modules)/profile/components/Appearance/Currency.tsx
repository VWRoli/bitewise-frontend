'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit, Save } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

import { Button } from '@/app/components/ui/button';
import { ECurrency } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/enum';
import Typography from '@/app/components/Typography';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useState } from 'react';

const Currency = () => {
  const { common, profile } = useDictionary();
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{profile.appearance.currency}</CardTitle>
          <CardDescription>{profile.appearance.currencyDesc}</CardDescription>
        </div>
        <Button
          variant="outline"
          type={'button'}
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {!isEditable && <Edit />} {isEditable ? common.cancel : common.edit}
        </Button>
      </CardHeader>
      <CardContent className="relative">
        {isEditable ? (
          <Select onValueChange={() => {}}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={profile.appearance.currency} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ECurrency.EUR}>EUR</SelectItem>
              <SelectItem value={ECurrency.USD}>USD</SelectItem>
              <SelectItem value={ECurrency.GBP}>GBP</SelectItem>
              <SelectItem value={ECurrency.HUF}>HUF</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Typography>EUR</Typography>
        )}
        {isEditable && (
          <Button className="absolute bottom-6 right-6" type="submit">
            <Save /> {common.save}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Currency;
