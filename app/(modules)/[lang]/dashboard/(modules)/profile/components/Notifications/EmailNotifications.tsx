'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import {
  TNotificationSettingsSchema,
  createNotificationSettingsSchema,
} from '@/app/(modules)/[lang]/dashboard/(modules)/profile/validations/notification-settings.validation';

import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import { IUser } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/interfaces';
import { Save } from 'lucide-react';
import SwitchFormField from '@/app/components/form/SwitchFormField';
import { handleError } from '@/app/utils/helpers';
import { toast } from '@/app/hooks/use-toast';
import { updateUser } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/actions';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useForm } from 'react-hook-form';
import { useUserContext } from '@/app/(modules)/[lang]/dashboard/(modules)/_user/context';
import { zodResolver } from '@hookform/resolvers/zod';

const EmailNotifications = () => {
  const { common, profile, validation } = useDictionary();
  const { user, setUser } = useUserContext();

  const notificationSettingsSchema =
    createNotificationSettingsSchema(validation);

  const form = useForm<TNotificationSettingsSchema>({
    resolver: zodResolver(notificationSettingsSchema),
    defaultValues: {
      securityEmail: user?.notificationSettings?.securityEmail || true,
      marketingEmail: user?.notificationSettings?.marketingEmail || false,
      communicationEmail:
        user?.notificationSettings?.communicationEmail || false,
    },
  });

  async function onSubmit(values: TNotificationSettingsSchema) {
    try {
      const result = await updateUser({ notificationSettings: values });

      setUser(result.data as IUser);

      toast({
        variant: 'success',
        description: profile.notifications.updateSuccess,
      });
    } catch (error: unknown) {
      handleError(error);
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>{profile.notifications.emailNotifications}</CardTitle>
              <CardDescription>
                {profile.notifications.emailNotificationsDesc}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <SwitchFormField
              form={form}
              name="communicationEmail"
              label={profile.notifications.communicationEmail}
              description={profile.notifications.communicationEmailDesc}
            />
            <SwitchFormField
              form={form}
              name="marketingEmail"
              label={profile.notifications.marketingEmail}
              description={profile.notifications.marketingEmailDesc}
            />
            <SwitchFormField
              form={form}
              name="securityEmail"
              label={profile.notifications.securityEmail}
              description={profile.notifications.securityEmailDesc}
              disabled
            />
            <div className="flex justify-end">
              <Button type="submit" variant="default">
                <Save /> {common.save}
              </Button>
            </div>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
};

export default EmailNotifications;
