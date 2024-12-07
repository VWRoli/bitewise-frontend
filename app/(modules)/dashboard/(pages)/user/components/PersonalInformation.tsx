import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { IProfileProps } from '@/app/(modules)/dashboard/(pages)/user/components/BasicInfo';
import Typography from '@/app/components/Typography';

const PersonalInformation = ({ user }: IProfileProps) => {
  return (
    <Card className="">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Personal Information</CardTitle>
        <Button variant="outline">
          <Edit /> Edit
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
        <article>
          <Typography variant="p">First Name</Typography>
          <Typography variant="large">Random</Typography>
        </article>
        <article>
          <Typography variant="p">Last Name</Typography>
          <Typography variant="large">User</Typography>
        </article>
        <article>
          <Typography variant="p">Email</Typography>
          <Typography variant="large">{user.email}</Typography>
        </article>
        <article>
          <Typography variant="p">Phone</Typography>
          <Typography variant="large">+120321654987</Typography>
        </article>
        <article>
          <Typography variant="p">Date of birth</Typography>
          <Typography variant="large">2024.21.26</Typography>
        </article>
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;
