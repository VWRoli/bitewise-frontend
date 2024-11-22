'use client';

import { ToastProvider } from '@/app/common/Providers/ToastProvider';
import { PropsWithChildren } from 'react';
import { MealPlansProvider } from '@/app/(modules)/dashboard/(pages)/meal-plans/provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastProvider>
      <MealPlansProvider>{children}</MealPlansProvider>
    </ToastProvider>
  );
}
