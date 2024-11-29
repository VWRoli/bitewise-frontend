'use client';

import { defaultSignInValues } from '@/app/(modules)/(auth)/constants';
import { ESignInSteps } from '@/app/(modules)/(auth)/enum';
import { ISignIn } from '@/app/(modules)/(auth)/interfaces';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as api from '../api';
import { useForm } from 'react-hook-form';
import { signinSchema } from '@/app/(modules)/(auth)/validations';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/app/components/ui/form';
import PasswordInput from '@/app/(modules)/(auth)/components/PasswordInput';
import InputField from '@/app/components/form/InputField';
import LoadingButton from '@/app/components/common/LoadingButton';

const SignInForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);
  const [isLoading, setIsLoading] = useState(false);

  const schema = signinSchema(step);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultSignInValues,
  });

  const isFirstStep = step === ESignInSteps.STEP_0;

  async function onSubmit(values: z.infer<typeof schema>) {
    if (step === ESignInSteps.STEP_0) {
      setStep(ESignInSteps.STEP_1);
    } else {
      setIsLoading(true);
      try {
        await api.login(values as ISignIn);
        router.push('/dashboard');
      } catch (error) {
        setIsLoading(false);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {isFirstStep ? (
          <InputField
            form={form}
            label="Email Address"
            name="email"
            type="email"
          />
        ) : (
          <PasswordInput form={form} label="Password" name="password" />
        )}

        <LoadingButton
          variant="default"
          className="w-full"
          type={'submit'}
          loading={isLoading}
        >
          {isFirstStep ? 'Continue' : 'Sign In'}
        </LoadingButton>
      </form>
    </Form>
  );
};

export default SignInForm;
