import Dashboard from '@/app/dashboard/components/Dashboard';
import { DRAWER_WIDTH } from '@/app/dashboard/constants';
import { Box, Toolbar } from '@mui/material';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
