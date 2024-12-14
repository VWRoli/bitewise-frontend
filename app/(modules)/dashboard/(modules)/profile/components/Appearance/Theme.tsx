import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';
import { Edit } from 'lucide-react';
import Typography from '@/app/components/Typography';

const Theme = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Theme</CardTitle>
          <CardDescription>Default theme for dashboard</CardDescription>
        </div>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
        <Typography>System</Typography>
      </CardContent>
    </Card>
  );
};

export default Theme;
