'use client';

import { IngredientsProvider } from '@/app/dashboard/(pages)/ingredients/provider';
import { ToastProvider } from '@/app/common/Providers/ToastProvider';
import { PropsWithChildren } from 'react';
import { MealsProvider } from '@/app/dashboard/(pages)/meals/provider';
import { UserProvider } from '@/app/dashboard/(pages)/user/provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastProvider>
      <UserProvider>
        <IngredientsProvider>
          <MealsProvider>{children}</MealsProvider>
        </IngredientsProvider>
      </UserProvider>
    </ToastProvider>
  );
}
