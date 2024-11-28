'use client';

import { ToastProvider } from '@/app/providers/ToastProvider';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <ToastProvider>{children}</ToastProvider>;
}
