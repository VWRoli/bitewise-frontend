'use client';

import { defaultSignInValues } from '@/app/(modules)/(auth)/constants';
import { ESignInSteps } from '@/app/(modules)/(auth)/enum';
import { ISignIn } from '@/app/(modules)/(auth)/interfaces';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as api from '../api';
import { Button } from '@/app/components/ui/button';
import { useForm } from 'react-hook-form';
import { signinSchema } from '@/app/(modules)/(auth)/validations';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import PasswordInput from '@/app/(modules)/(auth)/components/PasswordInput';

const SignInForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);

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
      await api.login(values as ISignIn);
      router.push('/dashboard');
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {isFirstStep ? (
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => (
              <FormItem>
                <FormLabel asChild>
                  <p className="first-letter:uppercase">Email Address</p>
                </FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <PasswordInput form={form} label="Password" name="password" />
        )}

        <Button variant="default" className="w-full" type={'submit'}>
          {isFirstStep ? 'Continue' : 'Sign In'}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
