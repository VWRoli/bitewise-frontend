import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';

interface IProps {
  isCurrent?: boolean;
}
const SessionItem = ({ isCurrent }: IProps) => {
  return (
    <Card className="flex items-center justify-between pr-6">
      <CardHeader className="flex flex-col">
        <CardTitle>Chrome</CardTitle>
        <CardDescription>
          {isCurrent ? (
            <span className="font-medium text-blue-500">Current session</span>
          ) : (
            <span>Last seen 30 minutes ago</span>
          )}{' '}
          - <span>Location</span>
        </CardDescription>
      </CardHeader>
      <Button variant="outline">Sign out</Button>
    </Card>
  );
};

export default SessionItem;
