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
import { ETheme } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/enum';
import Typography from '@/app/components/Typography';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useState } from 'react';
import { useTheme } from 'next-themes';

const Theme = () => {
  const { common, profile } = useDictionary();
  const [isEditable, setIsEditable] = useState(false);

  const { setTheme, theme } = useTheme();

  const currentThemeText =
    profile.appearance[theme as keyof typeof profile.appearance];

  return (
    <Card className="relative">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{profile.appearance.theme}</CardTitle>
          <CardDescription>{profile.appearance.themeDesc}</CardDescription>
        </div>
        <Button
          variant="outline"
          type={'button'}
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {!isEditable && <Edit />} {isEditable ? common.cancel : common.edit}
        </Button>
      </CardHeader>
      <CardContent>
        {isEditable ? (
          <Select onValueChange={(value) => setTheme(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder={
                  theme ? currentThemeText : profile.appearance.theme
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ETheme.LIGHT}>
                {profile.appearance.light}
              </SelectItem>
              <SelectItem value={ETheme.DARK}>
                {profile.appearance.dark}
              </SelectItem>
              <SelectItem value={ETheme.SYSTEM}>
                {profile.appearance.system}
              </SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Typography className="first-letter:uppercase">
            {theme ? currentThemeText : profile.appearance.theme}
          </Typography>
        )}
        {isEditable && (
          <Button
            className="absolute bottom-6 right-6"
            type="button"
            onClick={() => setIsEditable(false)}
          >
            <Save /> {common.save}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Theme;
