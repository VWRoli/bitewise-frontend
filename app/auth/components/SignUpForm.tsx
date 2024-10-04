import { Button } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomFormControl from '@/app/modules/auth/components/CustomFormControl';

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <CustomFormControl
        icon={<CheckCircleIcon />}
        label="Email Address"
        id="sign-up-email-address-input"
        type="email"
      />
      <CustomFormControl
        icon={<CheckCircleIcon />}
        label="Password"
        id="sign-up-password-input"
        type="password"
      />
      <CustomFormControl
        icon={<CheckCircleIcon />}
        label="Confirm Password"
        id="sign-up-confirm-password-input"
        type="password"
      />
      <Button variant="contained" fullWidth>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
