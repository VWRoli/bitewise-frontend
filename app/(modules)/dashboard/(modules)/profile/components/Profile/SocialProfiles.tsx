import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';
import { Edit } from 'lucide-react';
import InfoBox from '@/app/(modules)/dashboard/(modules)/profile/components/InfoBox';

const SocialProfiles = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Social Profiles</CardTitle>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
        <InfoBox label="Facebook" info="@facebook" />
        <InfoBox label="Twitter" info="@twitter" />
        <InfoBox label="Instagram" info="@instagram" />
        <InfoBox label="LinkedIn" info="@linkedin" />
      </CardContent>
    </Card>
  );
};

export default SocialProfiles;
