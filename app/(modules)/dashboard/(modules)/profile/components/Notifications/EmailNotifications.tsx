import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Switch } from '@/app/components/ui/switch';

const EmailNotifications = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Email notifications</CardTitle>
          <CardDescription>
            Get emails to find out what's going on when you're not online.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Communication emails</CardTitle>
              <CardDescription>
                Receive emails about your account activity.
              </CardDescription>
            </div>
            <Switch />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Marketing emails</CardTitle>
              <CardDescription>
                Receive emails about new products, features, and more.
              </CardDescription>
            </div>
            <Switch />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Security emails</CardTitle>
              <CardDescription>
                Receive emails about your account activity and security.
              </CardDescription>
            </div>
            <Switch />
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
};

export default EmailNotifications;
