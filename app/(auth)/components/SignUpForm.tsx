import { Button } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomFormControl from '@/app/(auth)/components/CustomFormControl';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form className="flex flex-col gap-4 w-full">
      <CustomFormControl
        label="Email Address"
        id="sign-up-email-address-input"
        type="email"
      />
      <CustomFormControl
        icon={
          showPassword ? (
            <VisibilityOffOutlinedIcon />
          ) : (
            <VisibilityOutlinedIcon />
          )
        }
        label="Password"
        id="sign-up-password-input"
        onIconClick={handleClickShowPassword}
        type={showPassword ? 'text' : 'password'}
      />
      <CustomFormControl
        icon={
          showPassword ? (
            <VisibilityOffOutlinedIcon />
          ) : (
            <VisibilityOutlinedIcon />
          )
        }
        label="Confirm Password"
        id="sign-up-confirm-password-input"
        onIconClick={handleClickShowPassword}
        type={showPassword ? 'text' : 'password'}
      />
      <Button variant="contained" fullWidth>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
