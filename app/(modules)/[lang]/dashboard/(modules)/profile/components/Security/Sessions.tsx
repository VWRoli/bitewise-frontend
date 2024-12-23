import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';
import { LogOut } from 'lucide-react';
import SessionItem from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Security/SessionItem';
import Typography from '@/app/components/Typography';

const Sessions = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle>Sessions</CardTitle>
          <Button variant="outline">
            <LogOut /> Sign out all other sessions
          </Button>
        </div>
        <CardDescription>
          Places where you're logged into the app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <SessionItem isCurrent />

        <Typography variant="p">3 other sessions</Typography>
        <SessionItem />
        <SessionItem />
        <SessionItem />
      </CardContent>
    </Card>
  );
};

export default Sessions;
