import { defaultSignInValues } from '@/app/(auth)/constants';
import { ESignInSteps } from '@/app/(auth)/enum';
import { ISignIn } from '@/app/(auth)/interfaces';
import { passwordRules } from '@/app/(auth)/utils';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from 'react-hook-form-mui';

const SignInForm = () => {
  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);

  const handleEmailValidation = (data: ISignIn) => {
    if (data.email) setStep(ESignInSteps.STEP_1);
  };

  const handleSuccess = (data: ISignIn) => {
    if (step === ESignInSteps.STEP_0) handleEmailValidation(data);
  };

  return (
    <FormContainer
      defaultValues={defaultSignInValues}
      onSuccess={handleSuccess}
      onError={(error) => console.log(error)}
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
