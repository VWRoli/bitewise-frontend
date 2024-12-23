'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit, Save } from 'lucide-react';
import {
  TPersonalInfoSchema,
  personalInformationSchema,
} from '@/app/(modules)/[lang]/dashboard/(modules)/profile/validations/personal-information.validation';

import { Button } from '@/app/components/ui/button';
import DateInfoBox from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Profile/DateInfobox';
import { Form } from '@/app/components/ui/form';
import { IUser } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/interfaces';
import InfoBox from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/InfoBox';
import PhoneInfoBox from '@/app/(modules)/[lang]/dashboard/(modules)/profile/components/Profile/PhoneInfoBox';
import { getDefaultValues } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/helpers';
import { handleError } from '@/app/utils/helpers';
import { set } from 'date-fns';
import { updateUser } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/actions';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUserContext } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/context';
import { zodResolver } from '@hookform/resolvers/zod';

const PersonalInformation = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { user, setUser } = useUserContext();

  const form = useForm<TPersonalInfoSchema>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: getDefaultValues(user),
  });

  async function onSubmit(values: TPersonalInfoSchema) {
    if (values.dateOfBirth) {
      values.dateOfBirth = set(values.dateOfBirth, { hours: 12 });
    }

    try {
      const result = await updateUser({ personalInformation: values });

      setUser(result.data as IUser);
    } catch (error: unknown) {
      handleError(error);
    }

    setIsEditable(false);
  }

  return (
    <Card>
      <Form {...form}>
        <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            <Button
              variant="outline"
              type={'button'}
              onClick={() => setIsEditable((prev) => !prev)}
            >
              {!isEditable && <Edit />} {isEditable ? 'Cancel' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
            <InfoBox<TPersonalInfoSchema>
              label="First Name"
              info={user?.personalInformation?.firstName || ''}
              name="firstName"
              isEditable={isEditable}
              form={form}
            />
            <InfoBox<TPersonalInfoSchema>
              label="Last Name"
              name="lastName"
              info={user?.personalInformation?.lastName || ''}
              isEditable={isEditable}
              form={form}
            />
            <InfoBox<TPersonalInfoSchema>
              label="Username"
              name="userName"
              info={user?.personalInformation?.userName || ''}
              isEditable={isEditable}
              form={form}
            />
            <PhoneInfoBox
              label="Phone"
              info={user?.personalInformation?.phoneNumber || ''}
              isEditable={isEditable}
              form={form}
            />
            <DateInfoBox
              label="Date of birth"
              info={
                user?.personalInformation?.dateOfBirth &&
                new Date(user?.personalInformation?.dateOfBirth)
              }
              isEditable={isEditable}
              form={form}
            />

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
