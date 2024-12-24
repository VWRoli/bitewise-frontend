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
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useState } from 'react';

const Language = () => {
  const { common, profile } = useDictionary();
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
  const currentLanguageText = getLanguageText(
    currentLanguage,
    profile.appearance,
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{profile.appearance.language}</CardTitle>
          <CardDescription>{profile.appearance.languageDesc}</CardDescription>
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
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={currentLanguageText} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ELanguage.ENGLISH}>
                {profile.appearance.english}
              </SelectItem>
              <SelectItem value={ELanguage.SPANISH}>
                {profile.appearance.spanish}
              </SelectItem>
              <SelectItem value={ELanguage.FRENCH}>
                {profile.appearance.french}
              </SelectItem>
              <SelectItem value={ELanguage.GERMAN}>
                {profile.appearance.german}
              </SelectItem>
              <SelectItem value={ELanguage.HUNGARIAN}>
                {profile.appearance.hungarian}
              </SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Typography>{currentLanguageText}</Typography>
        )}
        {isEditable && (
          <Button
            className="absolute bottom-6 right-6"
            type="button"
            onClick={handleSave}
          >
            <Save /> {common.save}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Language;
