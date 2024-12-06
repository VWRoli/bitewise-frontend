import AuthForm from '@/app/(modules)/(auth)/components/AuthForm';
import AuthImageFrame from '@/app/(modules)/(auth)/components/AuthImageFrame';

export default function Auth() {
  return (
    <div className="flex h-screen flex-col xl:mx-auto xl:max-w-[1408px] xl:flex-row xl:items-center">
      <AuthForm />
      <AuthImageFrame />
    </div>
  );
}
