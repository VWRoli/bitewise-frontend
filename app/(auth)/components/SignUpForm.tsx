import { defaultSignUpValues } from '@/app/(auth)/constants';
import { passwordRules } from '@/app/(auth)/utils';
import { Button } from '@mui/material';
import React from 'react';
import {
  FormContainer,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui';

const SignUpForm = () => {
  return (
    <FormContainer
      defaultValues={defaultSignUpValues}
      onSuccess={(data) => console.log(data)}
      onError={(error) => console.log(error)}
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

        <Button variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
