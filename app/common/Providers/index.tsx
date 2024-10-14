'use client';

import { IngredientsProvider } from '@/app/dashboard/(pages)/ingredients/provider';
import { ToastProvider } from '@/app/common/Providers/ToastProvider';
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
