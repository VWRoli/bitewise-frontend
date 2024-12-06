'use client';
import { PropsWithChildren } from 'react';

import { Button } from '@/app/components/ui/button';
import { API_URL } from '@/app/utils/config';

interface IProps extends PropsWithChildren {
  url: string;
}
const SocialLogin = ({ children, url }: IProps) => {
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}${url}`;
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleGoogleLogin}>
      {children}
    </Button>
  );
};

export default SocialLogin;
