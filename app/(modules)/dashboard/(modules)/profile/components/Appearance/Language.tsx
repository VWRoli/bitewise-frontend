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

const Language = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Language</CardTitle>
          <CardDescription>Default language for dashboard</CardDescription>
        </div>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent>
        <Typography>English</Typography>
      </CardContent>
    </Card>
  );
};

export default Language;
