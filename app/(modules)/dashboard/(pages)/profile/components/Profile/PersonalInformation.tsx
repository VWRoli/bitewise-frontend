import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import InfoBox from '@/app/(modules)/dashboard/(pages)/profile/components/InfoBox';

const PersonalInformation = async () => {
  const user = await fetchMe();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Personal Information</CardTitle>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
        <InfoBox label="First Name" info="Random" />
        <InfoBox label="Last Name" info="User" />
        <InfoBox label="Email" info={user?.data?.email} />
        <InfoBox label="Phone" info="+120321654987" />
        <InfoBox label="Date of birth" info="2024.21.26" />
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;
