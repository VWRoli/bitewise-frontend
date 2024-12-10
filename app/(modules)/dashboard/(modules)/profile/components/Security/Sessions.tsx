import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';
import { LogOut } from 'lucide-react';
import SessionItem from '@/app/(modules)/dashboard/(modules)/profile/components/Security/SessionItem';

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
          Places where you&apos;re logged into the app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <SessionItem isCurrent />

        <div>3 other sessions</div>
        <SessionItem />
        <SessionItem />
        <SessionItem />
      </CardContent>
    </Card>
  );
};

export default Sessions;
