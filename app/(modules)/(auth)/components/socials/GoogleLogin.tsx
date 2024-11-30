'use client';

import GoogleIcon from '@/app/components/icons/GoogleIcon';
import { Button } from '@/app/components/ui/button';
import { API_URL } from '@/app/utils/config';

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google/login`;
  };
  return (
    <Button variant="ghost" size="icon" onClick={handleGoogleLogin}>
      <GoogleIcon />
    </Button>
  );
};

export default GoogleLogin;
