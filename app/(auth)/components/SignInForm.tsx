import { defaultSignInValues } from '@/app/(auth)/constants';
import { ESignInSteps } from '@/app/(auth)/enum';
import { ISignIn } from '@/app/(auth)/interfaces';
import { passwordRules } from '@/app/(auth)/utils';
import React, { useState } from 'react';
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from 'react-hook-form-mui';
import { signIn } from 'next-auth/react';
import { toaster } from '@/app/common/components/CustomToast';
import { useRouter } from 'next/navigation';
import { LoadingButton } from '@mui/lab';
import { IFormProps } from '@/app/(auth)/components/AuthForm';

const SignInForm = ({ isLoading, setIsLoading }: IFormProps) => {
  const router = useRouter();
  const [step, setStep] = useState<ESignInSteps>(ESignInSteps.STEP_0);

  const handleEmailValidation = (data: ISignIn) => {
    if (data.email) setStep(ESignInSteps.STEP_1);
  };

  const handleSuccess = async (data: ISignIn) => {
    if (step === ESignInSteps.STEP_0) {
      handleEmailValidation(data);
    } else {
      setIsLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        toaster.error({
          text: 'Error signing in. Invalid credentials',
        });
        setIsLoading(false);
        return;
      }

      router.push('/dashboard');
      setIsLoading(false);
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
            disabled={isLoading}
            name={'email'}
          />
        ) : (
          <PasswordElement
            label={'Password'}
            required
            fullWidth
            name={'password'}
            disabled={isLoading}
            rules={passwordRules}
          />
        )}

        <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
          loading={isLoading}
        >
          {step === ESignInSteps.STEP_0 ? 'Continue' : 'Sign In'}
        </LoadingButton>
      </div>
    </FormContainer>
  );
};

export default SignInForm;
