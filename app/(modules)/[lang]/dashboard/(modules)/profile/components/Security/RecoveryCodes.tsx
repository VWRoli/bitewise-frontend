import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Edit } from 'lucide-react';

const RecoveryCodes = () => {
  return (
    <Card className="flex w-full justify-between">
      <CardHeader className="flex">
        <CardTitle className="space-x-2">Recovery codes</CardTitle>
        <CardDescription className="py-2">
          Generated Nov 23, 2024
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

export default RecoveryCodes;
