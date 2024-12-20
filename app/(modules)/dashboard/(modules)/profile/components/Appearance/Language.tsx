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
import { ELanguages } from '@/app/(modules)/dashboard/(modules)/profile/enum';
import Typography from '@/app/components/Typography';
import { useState } from 'react';

const Language = () => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Language</CardTitle>
          <CardDescription>Default language for dashboard</CardDescription>
        </div>
        <Button
          variant="outline"
          type={'button'}
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {!isEditable && <Edit />} {isEditable ? 'Cancel' : 'Edit'}
        </Button>
      </CardHeader>
      <CardContent className="relative">
        {isEditable ? (
          <Select onValueChange={() => {}}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ELanguages.ENGLISH}>English</SelectItem>
              <SelectItem value={ELanguages.SPANISH}>Spanish</SelectItem>
              <SelectItem value={ELanguages.FRENCH}>French</SelectItem>
              <SelectItem value={ELanguages.GERMAN}>German</SelectItem>
              <SelectItem value={ELanguages.HUNGARIAN}>Hungarian</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Typography>English</Typography>
        )}
        {isEditable && (
          <Button className="absolute bottom-6 right-6" type="submit">
            <Save /> Save
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Language;
