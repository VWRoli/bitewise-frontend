'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import PasswordInput from '@/app/(modules)/(auth)/components/PasswordInput';
import { defaultSignInValues } from '@/app/(modules)/(auth)/constants';
import { ESignInSteps } from '@/app/(modules)/(auth)/enum';
import { ISignIn } from '@/app/(modules)/(auth)/interfaces';
import {
  signinSchema,
  TSignInSchema,
} from '@/app/(modules)/(auth)/validations';
import LoadingButton from '@/app/components/buttons/LoadingButton';
import InputField from '@/app/components/form/InputField';
import { Form } from '@/app/components/ui/form';
import { useToast } from '@/app/hooks/use-toast';

import * as api from '../api';

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);

  const schema = signinSchema(step);

  const form = useForm<TSignInSchema>({
    resolver: zodResolver(schema),
    defaultValues: defaultSignInValues,
  });

  const isFirstStep = step === ESignInSteps.STEP_0;

  async function onSubmit(values: TSignInSchema) {
    if (step === ESignInSteps.STEP_0) {
      setStep(ESignInSteps.STEP_1);
    } else {
      try {
        await api.login(values as ISignIn);
        router.push('/dashboard');
      } catch (error: any) {
        toast({
          variant: 'error',
          description: error.message,
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4"
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
          loading={form.formState.isSubmitting}
        >
          {isFirstStep ? 'Continue' : 'Sign In'}
        </LoadingButton>
      </form>
    </Form>
  );
};

export default SignInForm;
