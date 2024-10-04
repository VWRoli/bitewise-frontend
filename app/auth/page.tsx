import AuthForm from '@/app/modules/auth/components/AuthForm';
import AuthImageFrame from '@/app/modules/auth/components/AuthImageFrame';

export default function Auth() {
  return (
    <div className="flex flex-col h-screen xl:flex-row xl:items-center xl:max-w-[1408px] xl:mx-auto">
      <AuthForm />
      <AuthImageFrame />
    </div>
  );
}
