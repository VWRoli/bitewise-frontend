import { Button } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomFormControl from '@/app/modules/auth/components/CustomFormControl';

const SignInForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <CustomFormControl
        icon={<CheckCircleIcon />}
        label="Email Address"
        id="sign-in-email-address-input"
        type="email"
      />
      <Button variant="contained" fullWidth>
        Continue
      </Button>
    </form>
  );
};

export default SignInForm;
