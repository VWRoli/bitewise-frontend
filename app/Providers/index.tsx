'use client';
import { ToastProvider } from '@/app/Providers/ToastProvider';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ToastProvider>{children}</ToastProvider>
    </SessionProvider>
  );
}
