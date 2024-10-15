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
import { LoadingButton } from '@mui/lab';
import { IFormProps } from '@/app/(modules)/(auth)/components/AuthForm';
import { handleLogin } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';

const SignInForm = () => {
  const router = useRouter();
  const { state, dispatch } = useUserContext();

  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);

  const handleEmailValidation = (data: ISignIn) => {
    if (data.email) setStep(ESignInSteps.STEP_1);
  };

  const handleSuccess = async (data: ISignIn) => {
    if (step === ESignInSteps.STEP_0) {
      handleEmailValidation(data);
    } else {
      await handleLogin(dispatch, data);
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
            disabled={state.isLoading}
            name={'email'}
          />
        ) : (
          <PasswordElement
            label={'Password'}
            required
            fullWidth
            name={'password'}
            disabled={state.isLoading}
            rules={passwordRules}
          />
        )}

        <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
          loading={state.isLoading}
        >
          {step === ESignInSteps.STEP_0 ? 'Continue' : 'Sign In'}
        </LoadingButton>
      </div>
    </FormContainer>
  );
};

export default SignInForm;
