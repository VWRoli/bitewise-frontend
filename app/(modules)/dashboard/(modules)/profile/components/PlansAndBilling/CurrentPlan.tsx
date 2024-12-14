import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';
import Typography from '@/app/components/Typography';

const CurrentPlan = () => {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-2">
          <CardTitle>
            <span>Basic plan</span> <Badge variant="outline">Active</Badge>
          </CardTitle>
          <CardDescription>Our most popular plan</CardDescription>
        </div>
        <div>
          <div className="flex items-end gap-1">
            <Typography variant="h2">$20</Typography>
            <Typography variant="p">per month</Typography>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex justify-between pt-6">
        <div>
          <Typography variant="large">Your next payment</Typography>
          <Typography variant="p">$10.00 Due by December 14, 2024</Typography>
        </div>
        <Button variant="outline">
          Upgrade Plan <ArrowUpRight />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CurrentPlan;
