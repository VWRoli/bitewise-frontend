'use client';
import { IngredientsProvider } from '@/app/Providers/IngredientsProvider';
import { ToastProvider } from '@/app/Providers/ToastProvider';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ToastProvider>
        <IngredientsProvider>{children}</IngredientsProvider>
      </ToastProvider>
    </SessionProvider>
  );
}
