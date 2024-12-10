'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import {
  TChangePasswordSchema,
  changePasswordSchema,
} from '@/app/(modules)/dashboard/(modules)/profile/validations';

import { Form } from '@/app/components/ui/form';
import LoadingButton from '@/app/components/buttons/LoadingButton';
import { PASSWORD_VALIDATION_MESSAGES } from '@/app/(modules)/dashboard/(modules)/profile/constants';
import PasswordInput from '@/app/(modules)/(auth)/components/PasswordInput';
import Typography from '@/app/components/Typography';
import { toast } from '@/app/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ChangePassword = () => {
  const form = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {},
  });

  async function onSubmit(values: TChangePasswordSchema) {
    try {
      // await api.register(values);
      // router.push('/dashboard');
    } catch (error: any) {
      toast({
        variant: 'error',
        description: error.message,
      });
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
              <div className="absolute bottom-0 right-0 flex w-full justify-end">
                <LoadingButton
                  variant="default"
                  type="submit"
                  loading={form.formState.isSubmitting}
                >
                  Change Password
                </LoadingButton>
              </div>
            </article>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
