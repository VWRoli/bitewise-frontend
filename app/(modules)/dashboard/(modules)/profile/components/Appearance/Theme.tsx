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
import { ETheme } from '@/app/(modules)/dashboard/(modules)/profile/enum';
import Typography from '@/app/components/Typography';
import { useState } from 'react';
import { useTheme } from 'next-themes';

const Theme = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { setTheme } = useTheme();

  return (
    <Card className="relative">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Theme</CardTitle>
          <CardDescription>Default theme for dashboard</CardDescription>
        </div>
        <Button
          variant="outline"
          type={'button'}
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {!isEditable && <Edit />} {isEditable ? 'Cancel' : 'Edit'}
        </Button>
      </CardHeader>
      <CardContent>
        {isEditable ? (
          <Select onValueChange={(value) => setTheme(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ETheme.LIGHT}>Light</SelectItem>
              <SelectItem value={ETheme.DARK}>Dark</SelectItem>
              <SelectItem value={ETheme.SYSTEM}>System</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Typography>System</Typography>
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

export default Theme;
