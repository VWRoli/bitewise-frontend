import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import SignUpForm from '@/app/(modules)/(auth)/components/SignUpForm';
import SignInForm from '@/app/(modules)/(auth)/components/SignInForm';
import { AuthView } from '@/app/(modules)/(auth)/enum';
import { Separator } from '@/app/components/ui/separator';
import SocialLogin from '@/app/(modules)/(auth)/components/SocialLogin';
import FacebookIcon from '@/app/components/icons/FacebookIcon';
import GoogleIcon from '@/app/components/icons/GoogleIcon';

const AuthForm = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-around px-8 md:mx-auto md:max-w-[80%] xl:max-h-[704px] xl:rounded-l-lg xl:border xl:border-r-0 xl:border-slate-400 xl:px-16">
      <div>Logo</div>
      <h1 className="text-2xl font-bold xl:text-3xl">Welcome Back</h1>
      <div>Welcome back, please enter your details</div>
      <Tabs defaultValue={AuthView.SIGN_IN}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={AuthView.SIGN_IN}>Sign In</TabsTrigger>
          <TabsTrigger value={AuthView.SIGN_UP}>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value={AuthView.SIGN_IN}>
          <SignInForm />
        </TabsContent>
        <TabsContent value={AuthView.SIGN_UP}>
          <SignUpForm />
        </TabsContent>
      </Tabs>

      <div className="flex w-full items-center">
        <Separator className="shrink" />
        <p className="mx-4 flex-shrink-0">Or continue with</p>
        <Separator className="shrink" />
      </div>
      <div className="space-x-4">
        <SocialLogin url="/auth/facebook/login">
          <FacebookIcon />
        </SocialLogin>
        <SocialLogin url="/auth/google/login">
          <GoogleIcon />
        </SocialLogin>
      </div>
      <div className="text-center text-xs">
        BiteWise is your smart meal planner, offering personalized recipes and
        nutrition insights to help you eat healthier and save time.
      </div>
    </section>
  );
};

export default AuthForm;
