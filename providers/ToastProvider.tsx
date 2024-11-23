'use client';

import { ToastContainer } from 'react-toastify';
import { PropsWithChildren } from 'react';

export const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ToastContainer icon={false} theme="colored" hideProgressBar />
    </>
  );
};
