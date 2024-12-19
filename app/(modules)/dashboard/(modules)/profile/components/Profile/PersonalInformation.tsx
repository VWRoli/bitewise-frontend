'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit, Save } from 'lucide-react';
import {
  TProfileInfoSchema,
  profileInformationSchema,
} from '@/app/(modules)/dashboard/(modules)/profile/validations/profile-information.validation';

import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import InfoBox from '@/app/(modules)/dashboard/(modules)/profile/components/InfoBox';
import { handleError } from '@/app/utils/helpers';
import { toast } from '@/app/hooks/use-toast';
import { updateUser } from '@/app/(modules)/dashboard/(modules)/profile/actions';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUserContext } from '@/app/(modules)/dashboard/(modules)/_user/context';
import { zodResolver } from '@hookform/resolvers/zod';

const PersonalInformation = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { user, setUser } = useUserContext();

  const form = useForm<TProfileInfoSchema>({
    resolver: zodResolver(profileInformationSchema),
    defaultValues: user?.personalInformation || {},
  });

  async function onSubmit(values: TProfileInfoSchema) {
    try {
      const result = await updateUser({ personalInformation: values });

      setUser(result.data as IUser);
    } catch (error: unknown) {
      handleError(error);
    }

    setIsEditable(false);
  }

  const handleClicked = () => {
    if (isEditable) {
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

  return (
    <Card>
      <Form {...form}>
        <form
          className="relative flex flex-col gap-2 px-4 pb-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            <Button variant="outline" type={'button'} onClick={handleClicked}>
              <Edit /> {isEditable ? 'Cancel' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
            <InfoBox
              label="First Name"
              info={user?.personalInformation?.firstName || ''}
              name="firstName"
              isEditable={isEditable}
              form={form}
            />
            <InfoBox
              label="Last Name"
              name="lastName"
              info={user?.personalInformation?.lastName || ''}
              isEditable={isEditable}
              form={form}
            />
            <InfoBox
              label="Username"
              name="userName"
              info={user?.personalInformation?.userName || ''}
              isEditable={isEditable}
              form={form}
            />
            <InfoBox
              label="Phone"
              name="phone"
              info={user?.personalInformation?.phone || ''}
              isEditable={isEditable}
              form={form}
            />
            {/* <InfoBox
              label="Date of birth"
              name="dateOfBirth"
              info={user?.personalInformation?.dateOfBirth || ''}
              isEditable={isEditable}
              form={form}
            /> */}

            {isEditable && (
              <Button className="absolute bottom-6 right-6" type="submit">
                <Save /> Save
              </Button>
            )}
          </CardContent>
        </form>
      </Form>
    </Card>
  );
};

export default PersonalInformation;
