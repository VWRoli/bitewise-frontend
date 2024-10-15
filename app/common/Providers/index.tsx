'use client';

import { IngredientsProvider } from '@/app/dashboard/(pages)/ingredients/provider';
import { ToastProvider } from '@/app/common/Providers/ToastProvider';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { MealsProvider } from '@/app/dashboard/(pages)/meals/provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ToastProvider>
        <IngredientsProvider>
          <MealsProvider>{children}</MealsProvider>
        </IngredientsProvider>
      </ToastProvider>
    </SessionProvider>
  );
}
