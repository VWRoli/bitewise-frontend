'use client';

import { ToastProvider } from '@/app/common/Providers/ToastProvider';
import { PropsWithChildren } from 'react';
import { MealsProvider } from '@/app/(modules)/dashboard/(pages)/meals/provider';
import { UserProvider } from '@/app/(modules)/dashboard/(pages)/user/provider';
import { MealPlansProvider } from '@/app/(modules)/dashboard/(pages)/meal-plans/provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastProvider>
      <UserProvider>
        <MealsProvider>
          <MealPlansProvider>{children}</MealPlansProvider>
        </MealsProvider>
      </UserProvider>
    </ToastProvider>
  );
}
