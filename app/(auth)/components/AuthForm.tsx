'use client';

import { Divider, IconButton, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import SignUpForm from '@/app/(auth)/components/SignUpForm';
import SignInForm from '@/app/(auth)/components/SignInForm';

const AuthForm = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="flex flex-col items-center justify-around h-screen px-8 md:max-w-[80%] md:mx-auto xl:max-h-[704px] xl:border xl:border-slate-400 xl:px-16 xl:border-r-0 xl:rounded-l-lg">
      <div>Logo</div>
      <h1 className="text-2xl xl:text-3xl font-bold">Welcome Back</h1>
      <div>Welcome back, please enter your details</div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      {value ? <SignUpForm /> : <SignInForm />}
      <Divider
        aria-hidden="true"
        component="div"
        role="presentation"
        className="text-sm w-full"
      >
        Or continue with
      </Divider>
      <div>
        <IconButton aria-label="google-login">
          <GoogleIcon />
        </IconButton>
        <IconButton aria-label="apple-login">
          <AppleIcon />
        </IconButton>
        <IconButton aria-label="facebook-login">
          <FacebookIcon />
        </IconButton>
      </div>
      <div className="text-center text-xs">
        BiteWise is your smart meal planner, offering personalized recipes and
        nutrition insights to help you eat healthier and save time.
      </div>
    </section>
  );
};

export default AuthForm;
