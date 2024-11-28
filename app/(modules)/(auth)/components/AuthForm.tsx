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
import { Button } from '@/app/components/ui/button';
import FacebookIcon from '@/app/components/icons/FacebookIcon';
import GoogleIcon from '@/app/components/icons/GoogleIcon';
import AppleIcon from '@/app/components/icons/AppleIcon';

const AuthForm = () => {
  return (
    <section className="flex flex-col items-center justify-around h-screen px-8 md:max-w-[80%] md:mx-auto xl:max-h-[704px] xl:border xl:border-slate-400 xl:px-16 xl:border-r-0 xl:rounded-l-lg">
      <div>Logo</div>
      <h1 className="text-2xl xl:text-3xl font-bold">Welcome Back</h1>
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

      <div className="flex items-center w-full">
        <Separator className="shrink" />
        <p className="flex-shrink-0 mx-4">Or continue with</p>
        <Separator className="shrink" />
      </div>
      <div className="space-x-4">
        <Button variant="ghost" size="icon">
          <AppleIcon />
        </Button>
        <Button variant="ghost" size="icon">
          <FacebookIcon />
        </Button>
        <Button variant="ghost" size="icon">
          <GoogleIcon />
        </Button>
      </div>
      <div className="text-center text-xs">
        BiteWise is your smart meal planner, offering personalized recipes and
        nutrition insights to help you eat healthier and save time.
      </div>
    </section>
  );
};

export default AuthForm;
