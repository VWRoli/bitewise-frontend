import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Edit } from 'lucide-react';

const TwoFa = () => {
  return (
    <Card className="flex w-full justify-between">
      <CardHeader className="flex">
        <CardTitle className="space-x-2">
          <span>2-step Verification</span>{' '}
          <Badge variant="outline">Disabled</Badge>
        </CardTitle>
        <CardDescription className="py-2">
          An extra layer of protection for your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardContent>
    </Card>
  );
};

export default TwoFa;
