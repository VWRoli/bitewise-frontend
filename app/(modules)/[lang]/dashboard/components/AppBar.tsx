'use client';

import { Bell, CircleUserRound, LogOut } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import CustomBreadCrumbs from '@/app/(modules)/[lang]/dashboard/components/CustomBreadCrumbs';
import Link from 'next/link';
import LoadingButton from '@/app/components/buttons/LoadingButton';
import { SidebarTrigger } from '@/app/components/ui/sidebar';
import { logout } from '@/app/(modules)/(auth)/api';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/app/hooks/use-toast';

const AppBar = () => {
  const dict = useDictionary();

  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      router.push('/');
    } catch (error: any) {
      setIsLoading(false);
      toast({
        variant: 'error',
        description: (error?.message as string) || 'Uknown Error',
      });
    }
  };

  return (
    <header className="flex justify-between px-2 py-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <CustomBreadCrumbs />
      </div>
      <div>
        <LoadingButton
          variant="ghost"
          onClick={handleLogout}
          loading={isLoading}
        >
          <LogOut className="sm:hidden" />
          <span className="hidden sm:block">
            {dict.dashboard.appbar.logout}
          </span>
        </LoadingButton>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            // TODO: notifications'
          }}
        >
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <Link href="/dashboard/profile">
            <CircleUserRound />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default AppBar;
