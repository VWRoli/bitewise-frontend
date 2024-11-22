import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import { UserProvider } from '@/app/(modules)/dashboard/(pages)/user/provider';
import Dashboard from '@/app/(modules)/dashboard/components/Dashboard';
import UserProfile from '@/app/(modules)/dashboard/components/UserProfile';
import { DRAWER_WIDTH } from '@/app/(modules)/dashboard/constants';
import { Box, Toolbar } from '@mui/material';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await fetchMe();

  return (
    <UserProvider user={user.data as IUser}>
      <div className="p-4 bg-light min-h-screen text-dark">
        <Dashboard>
          <UserProfile />
        </Dashboard>
        <Toolbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            ml: { sm: `${DRAWER_WIDTH}px` },
          }}
        >
          {children}
        </Box>
      </div>
    </UserProvider>
  );
}
