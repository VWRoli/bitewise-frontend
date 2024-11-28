'use client'; //TODO: could be server side if logout will be redone to server function

import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/(modules)/(auth)/api';
import CustomBreadCrumbs from '@/app/(modules)/dashboard/components/CustomBreadCrumbs';
import { Bell, CircleUserRound, LogOut } from 'lucide-react';
import { SidebarTrigger } from '@/app/components/ui/sidebar';

const AppBar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <header className="flex justify-between px-2 py-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <CustomBreadCrumbs />
      </div>
      <div>
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="sm:hidden" />
          <span className="hidden sm:block">Log Out</span>
        </Button>

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
