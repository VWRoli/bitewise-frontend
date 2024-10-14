'use client';
import useAuthRedirect from '@/app/(auth)/hooks/useAuthRedirect';
import LoadingPage from '@/app/common/components/LoadingPage';
import Dashboard from '@/app/dashboard/components/Dashboard';
import { DRAWER_WIDTH } from '@/app/dashboard/constants';
import { Box, Toolbar } from '@mui/material';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const status = useAuthRedirect();

  status === 'loading' && <LoadingPage />;

  return (
    <>
      {status === 'authenticated' && (
        <>
          <Dashboard />
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
        </>
      )}
    </>
  );
}
