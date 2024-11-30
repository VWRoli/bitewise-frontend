import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import { UserProvider } from '@/app/(modules)/dashboard/(pages)/user/provider';
import { SidebarProvider } from '@/app/components/ui/sidebar';
import { AppSidebar } from '@/app/(modules)/dashboard/components/AppSidebar';
import AppBar from '@/app/(modules)/dashboard/components/AppBar';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await fetchMe();

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
