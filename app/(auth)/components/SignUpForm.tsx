'use client';
import { IFormProps } from '@/app/(auth)/components/AuthForm';
import { defaultSignUpValues } from '@/app/(auth)/constants';
import { ISignUp } from '@/app/(auth)/interfaces';
import { register } from '@/app/(auth)/services';
import { passwordRules } from '@/app/(auth)/utils';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FormContainer,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui';

const SignUpForm = ({ isLoading, setIsLoading }: IFormProps) => {
  const router = useRouter();

  const handleSuccess = async (data: ISignUp) => {
    try {
      setIsLoading(true);
      await register(data);
      router.push('/dashboard');
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer
      defaultValues={defaultSignUpValues}
      onSuccess={(data) => handleSuccess(data)}
    >
      <div className="flex flex-col gap-4 w-full">
        <TextFieldElement
          required
          fullWidth
          type={'email'}
          label={'Email Address'}
          name={'email'}
          disabled={isLoading}
        />
        <PasswordElement
          label={'Password'}
          required
          fullWidth
          name={'password'}
          rules={passwordRules}
          disabled={isLoading}
        />
        <PasswordRepeatElement
          passwordFieldName={'password'}
          name={'confirmPassword'}
          fullWidth
          label={'Confirm Password'}
          required
          rules={passwordRules}
          disabled={isLoading}
        />

        <LoadingButton
          loading={isLoading}
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
