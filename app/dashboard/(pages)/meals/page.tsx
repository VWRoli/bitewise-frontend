'use client';
import useAuthRedirect from '@/app/(auth)/hooks/useAuthRedirect';
import LoadingPage from '@/app/common/components/LoadingPage';

export default function Page() {
  const status = useAuthRedirect();

  status === 'loading' && <LoadingPage />;
  return <>Meals</>;
}
