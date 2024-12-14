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

const BillingInformation = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>Random User</CardDescription>
        </div>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent className="">
        <Typography>Street address</Typography>
        <Typography>City, Province, zip code</Typography>
        <Typography>Country</Typography>
      </CardContent>
    </Card>
  );
};

export default BillingInformation;
