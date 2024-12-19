'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Edit, Save } from 'lucide-react';
import {
  TSocialProfilesSchema,
  socialProfilesSchema,
} from '@/app/(modules)/dashboard/(modules)/profile/validations';

import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import InfoBox from '@/app/(modules)/dashboard/(modules)/profile/components/InfoBox';
import { addHttps } from '@/app/(modules)/dashboard/(modules)/profile/helpers';
import { handleError } from '@/app/utils/helpers';
import { updateUser } from '@/app/(modules)/dashboard/(modules)/profile/actions';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUserContext } from '@/app/(modules)/dashboard/(modules)/_user/context';
import { zodResolver } from '@hookform/resolvers/zod';

const SocialProfiles = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { user, setUser } = useUserContext();

  const form = useForm<TSocialProfilesSchema>({
    resolver: zodResolver(socialProfilesSchema),
    defaultValues: user.socialProfiles || {},
  });

  async function onSubmit(values: TSocialProfilesSchema) {
    try {
      const result = await updateUser({ socialProfiles: values });

      setUser(result.data as IUser);
    } catch (error: unknown) {
      handleError(error);
    }

    setIsEditable(false);
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const { name, value } = e.target;
    const updatedValue = addHttps(value);

    form.setValue(name as keyof TSocialProfilesSchema, updatedValue, {
      shouldValidate: true,
    });
  };

  return (
    <Card>
      <Form {...form}>
        <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Social Profiles</CardTitle>
            <Button
              variant="outline"
              type={'button'}
              onClick={() => setIsEditable((prev) => !prev)}
            >
              {!isEditable && <Edit />} {isEditable ? 'Cancel' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-y-4 xl:w-3/5">
            <InfoBox<TSocialProfilesSchema>
              label="Facebook"
              name="facebook"
              info={user?.socialProfiles?.facebook}
              isEditable={isEditable}
              form={form}
              onBlur={handleBlur}
            />
            <InfoBox<TSocialProfilesSchema>
              label="Twitter"
              name="twitter"
              info={user?.socialProfiles?.twitter}
              isEditable={isEditable}
              form={form}
              onBlur={handleBlur}
            />
            <InfoBox<TSocialProfilesSchema>
              label="Instagram"
              name="instagram"
              info={user?.socialProfiles?.instagram}
              isEditable={isEditable}
              form={form}
              onBlur={handleBlur}
            />
            <InfoBox<TSocialProfilesSchema>
              label="LinkedIn"
              name="linkedin"
              info={user?.socialProfiles?.linkedin}
              isEditable={isEditable}
              form={form}
              onBlur={handleBlur}
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

export default SocialProfiles;
