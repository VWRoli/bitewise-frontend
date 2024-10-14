'use client';
import useAuthRedirect from '@/app/(auth)/hooks/useAuthRedirect';
import LoadingPage from '@/app/common/components/LoadingPage';

export default function Page() {
  const status = useAuthRedirect();

  if (status === 'loading') {
    return <LoadingPage />;
  }
  return <>Meal PLans</>;
}
