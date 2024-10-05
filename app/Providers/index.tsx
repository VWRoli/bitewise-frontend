'use client';
import { ToastProvider } from '@/app/Providers/ToastProvider';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <ToastProvider>{children}</ToastProvider>;
}
