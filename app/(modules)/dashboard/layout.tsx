import { notFound } from 'next/navigation';

import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import { UserProvider } from '@/app/(modules)/dashboard/(pages)/user/provider';
import AppBar from '@/app/(modules)/dashboard/components/AppBar';
import { AppSidebar } from '@/app/(modules)/dashboard/components/AppSidebar';
import { SidebarProvider } from '@/app/components/ui/sidebar';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await fetchMe();

  if (!user) {
    notFound();
  }

  return (
    <UserProvider user={user.data as IUser}>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppBar />
          {children}
        </main>
      </SidebarProvider>
    </UserProvider>
  );
}
