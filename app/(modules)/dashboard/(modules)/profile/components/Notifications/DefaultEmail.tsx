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

const DefaultEmail = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Default notifications email</CardTitle>
          <CardDescription>
            Choose where you'd like emails to be sent.
          </CardDescription>
        </div>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent>
        <Typography>test@email.com</Typography>
      </CardContent>
    </Card>
  );
};

export default DefaultEmail;
