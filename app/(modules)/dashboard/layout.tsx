import AppBar from '@/app/(modules)/dashboard/components/AppBar';
import { AppSidebar } from '@/app/(modules)/dashboard/components/AppSidebar';
import { IUser } from '@/app/(modules)/dashboard/(modules)/_user/interfaces';
import { SidebarProvider } from '@/app/components/ui/sidebar';
import { UserProvider } from '@/app/(modules)/dashboard/(modules)/_user/provider';
import { fetchMe } from '@/app/(modules)/dashboard/(modules)/_user/actions';
import { notFound } from 'next/navigation';

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
    <UserProvider authUser={user.data as IUser}>
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
