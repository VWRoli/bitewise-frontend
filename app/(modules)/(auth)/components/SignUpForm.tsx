'use client';

import { defaultSignUpValues } from '@/app/(modules)/(auth)/constants';
import { ISignUp } from '@/app/(modules)/(auth)/interfaces';
import { passwordRules } from '@/app/(modules)/(auth)/utils';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FormContainer,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui';
import * as api from '../api';

const SignUpForm = () => {
  const router = useRouter();

  const handleSuccess = async (data: ISignUp) => {
    await api.register(data);
    router.push('/dashboard');
  };

  return (
    <FormContainer
      defaultValues={defaultSignUpValues}
      onSuccess={handleSuccess}
    >
      <div className="flex flex-col gap-4 w-full">
        <TextFieldElement
          required
          fullWidth
          type={'email'}
          label={'Email Address'}
          name={'email'}
        />
        <PasswordElement
          label={'Password'}
          required
          fullWidth
          name={'password'}
          rules={passwordRules}
        />
        <PasswordRepeatElement
          passwordFieldName={'password'}
          name={'confirmPassword'}
          fullWidth
          label={'Confirm Password'}
          required
          rules={passwordRules}
        />

        <LoadingButton variant="contained" fullWidth type="submit">
          Sign Up
        </LoadingButton>
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
