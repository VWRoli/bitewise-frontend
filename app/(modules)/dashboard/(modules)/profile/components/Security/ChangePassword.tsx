'use client';

import {
  CHANGE_PASSWORD_DEFAULT_VALUES,
  PASSWORD_VALIDATION_MESSAGES,
} from '@/app/(modules)/dashboard/(modules)/profile/constants';
import { Card, CardContent } from '@/app/components/ui/card';
import {
  TChangePasswordSchema,
  changePasswordSchema,
} from '@/app/(modules)/dashboard/(modules)/profile/validations';

import { Form } from '@/app/components/ui/form';
import LoadingButton from '@/app/components/buttons/LoadingButton';
import PasswordInput from '@/app/(modules)/(auth)/components/PasswordInput';
import Typography from '@/app/components/Typography';
import { changePassword } from '@/app/(modules)/dashboard/(modules)/profile/actions';
import { handleError } from '@/app/utils/helpers';
import { toast } from '@/app/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ChangePassword = () => {
  const form = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: CHANGE_PASSWORD_DEFAULT_VALUES,
  });

  async function onSubmit(values: TChangePasswordSchema) {
    try {
      await changePassword(values);
      toast({
        variant: 'success',
        description: 'Password changed successfully',
      });
      form.reset();
    } catch (error: unknown) {
      handleError(error);
    }
  }
  return (
    <Card>
      <CardContent className="">
        <Form {...form}>
          <form
            className="relative flex flex-col gap-8 pt-6 xl:flex-row"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <article className="w-1/2 space-y-6">
              <PasswordInput
                form={form}
                label="Old Password"
                name="oldPassword"
              />
              <PasswordInput form={form} label="Password" name="password" />

              <PasswordInput
                form={form}
                label="Confirm Password"
                name="confirmPassword"
              />
            </article>

            <article className="flex w-1/2 flex-col items-center justify-center">
              <ul className="list-disc space-y-3">
                {Object.values(PASSWORD_VALIDATION_MESSAGES).map((val) => (
                  <li key={val}>
                    <Typography variant="p" className="font-medium">
                      {val}
                    </Typography>
                  </li>
                ))}
              </ul>

              <LoadingButton
                variant="default"
                type="submit"
                className="absolute bottom-0 right-0 flex w-fit justify-end"
                loading={form.formState.isSubmitting}
              >
                Change Password
              </LoadingButton>
            </article>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
