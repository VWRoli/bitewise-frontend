'use client';

import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/(modules)/(auth)/api';
import CustomBreadCrumbs from '@/app/(modules)/dashboard/components/CustomBreadCrumbs';
import { Bell, CircleUserRound, LogOut } from 'lucide-react';
import { SidebarTrigger } from '@/app/components/ui/sidebar';
import LoadingButton from '@/app/components/common/LoadingButton';
import { useState } from 'react';

const AppBar = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      router.push('/');
    } catch (error) {
      setIsLoading(false);
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
          <span className="hidden sm:block">Log Out</span>
        </LoadingButton>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => console.log('// TODO: notifications')}
        >
          <Bell />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => console.log('// TODO: account')}
        >
          <CircleUserRound />
        </Button>
      </div>
    </header>
  );
};

export default AppBar;
