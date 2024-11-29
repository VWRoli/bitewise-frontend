'use client';

import { defaultSignUpValues } from '@/app/(modules)/(auth)/constants';
import { useRouter } from 'next/navigation';
import * as api from '../api';
import { Button } from '@/app/components/ui/button';
import { signupSchema } from '@/app/(modules)/(auth)/validations';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/app/components/ui/form';
import PasswordInput from '@/app/(modules)/(auth)/components/PasswordInput';
import { useForm } from 'react-hook-form';
import InputField from '@/app/components/form/InputField';
import LoadingButton from '@/app/components/common/LoadingButton';
import { useState } from 'react';

const SignUpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: defaultSignUpValues,
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true);
    try {
      await api.register(values);
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <InputField
          form={form}
          type={'email'}
          label={'Email Address'}
          name={'email'}
        />
        <PasswordInput form={form} label="Password" name="password" />

        <PasswordInput
          form={form}
          label="Confirm Password"
          name="confirmPassword"
        />

        <LoadingButton
          variant="default"
          className="w-full"
          type="submit"
          loading={isLoading}
        >
          Sign Up
        </LoadingButton>
      </form>
    </Form>
  );
};

export default SignUpForm;
