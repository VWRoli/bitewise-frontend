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
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/app/components/ui/button';
import { ELanguage } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/enum';
import Typography from '@/app/components/Typography';
import { getLanguageText } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/helpers';
import { useState } from 'react';

const Language = () => {
  const router = useRouter();
  const params = useParams();

  const [isEditable, setIsEditable] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    (params.lang as string) || ELanguage.ENGLISH,
  );

  const handleChange = (value: ELanguage) => {
    setCurrentLanguage(value);
  };

  const handleSave = () => {
    router.push(`/${currentLanguage}/dashboard/profile`);
  };

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
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ELanguage.ENGLISH}>English</SelectItem>
              <SelectItem value={ELanguage.SPANISH}>Spanish</SelectItem>
              <SelectItem value={ELanguage.FRENCH}>French</SelectItem>
              <SelectItem value={ELanguage.GERMAN}>German</SelectItem>
              <SelectItem value={ELanguage.HUNGARIAN}>Hungarian</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Typography>{getLanguageText(currentLanguage)}</Typography>
        )}
        {isEditable && (
          <Button
            className="absolute bottom-6 right-6"
            type="button"
            onClick={handleSave}
          >
            <Save /> Save
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Language;
