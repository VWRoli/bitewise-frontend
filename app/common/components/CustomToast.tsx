'use client';

import { Id, ToastOptions, toast } from 'react-toastify';

interface Props {
  text: string;
}

const CustomToast: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-lg font-normal flex-1">{text}</p>
    </div>
  );
};
export const toaster = (myProps: Props, toastProps?: ToastOptions): Id =>
  toast(<CustomToast {...myProps} />, {
    ...toastProps,
  });

toaster.success = (myProps: Props, toastProps?: ToastOptions): Id =>
  toast.success(<CustomToast {...myProps} />, { ...toastProps });

toaster.error = (myProps: Props, toastProps?: ToastOptions): Id =>
  toast.error(<CustomToast {...myProps} />, { ...toastProps });

toaster.info = (myProps: Props, toastProps?: ToastOptions): Id =>
  toast.info(<CustomToast {...myProps} />, { ...toastProps });
