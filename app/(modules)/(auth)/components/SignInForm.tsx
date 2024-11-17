'use client';

import { defaultSignInValues } from '@/app/(modules)/(auth)/constants';
import { ESignInSteps } from '@/app/(modules)/(auth)/enum';
import { ISignIn } from '@/app/(modules)/(auth)/interfaces';
import { passwordRules } from '@/app/(modules)/(auth)/utils';
import React, { useState } from 'react';
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from 'react-hook-form-mui';
import { useRouter } from 'next/navigation';
import * as api from '../api';
import { Button } from '@mui/material';

const SignInForm = () => {
  const router = useRouter();

  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);

  const handleEmailValidation = (data: ISignIn) => {
    if (data.email) setStep(ESignInSteps.STEP_1);
  };

  const handleSuccess = async (data: ISignIn) => {
    if (step === ESignInSteps.STEP_0) {
      handleEmailValidation(data);
    } else {
      await api.login(data);
      router.push('/dashboard');
    }
  };

  return (
    <FormContainer
      defaultValues={defaultSignInValues}
      onSuccess={handleSuccess}
    >
      <div className="flex flex-col gap-4 w-full">
        {step === ESignInSteps.STEP_0 ? (
          <TextFieldElement
            required
            fullWidth
            type={'email'}
            label={'Email Address'}
            name={'email'}
          />
        ) : (
          <PasswordElement
            label={'Password'}
            required
            fullWidth
            name={'password'}
            rules={passwordRules}
          />
        )}

        <Button variant="contained" fullWidth type="submit">
          {step === ESignInSteps.STEP_0 ? 'Continue' : 'Sign In'}
        </Button>
      </div>
    </FormContainer>
  );
};

export default SignInForm;
