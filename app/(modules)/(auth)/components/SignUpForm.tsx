'use client';

import { handleRegister } from '@/app/(modules)/(auth)/actions';
import { defaultSignUpValues } from '@/app/(modules)/(auth)/constants';
import { ISignUp } from '@/app/(modules)/(auth)/interfaces';
import { passwordRules } from '@/app/(modules)/(auth)/utils';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FormContainer,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui';

const SignUpForm = () => {
  const { state, dispatch } = useUserContext();
  const router = useRouter();

  const handleSuccess = async (data: ISignUp) => {
    await handleRegister(dispatch, data);
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
          disabled={state.isLoading}
        />
        <PasswordElement
          label={'Password'}
          required
          fullWidth
          name={'password'}
          rules={passwordRules}
          disabled={state.isLoading}
        />
        <PasswordRepeatElement
          passwordFieldName={'password'}
          name={'confirmPassword'}
          fullWidth
          label={'Confirm Password'}
          required
          rules={passwordRules}
          disabled={state.isLoading}
        />

        <LoadingButton
          loading={state.isLoading}
          variant="contained"
          fullWidth
          type="submit"
        >
          Sign Up
        </LoadingButton>
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
