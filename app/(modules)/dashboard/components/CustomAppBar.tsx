import { DRAWER_WIDTH } from '@/app/(modules)/dashboard/constants';
import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from '@/app/(modules)/(auth)/api';
import CustomBreadCrumbs from '@/app/(modules)/dashboard/components/CustomBreadCrumbs';
import LogoutIcon from '@mui/icons-material/Logout';

interface IProps {
  mobileOpen: boolean;
  isClosing: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomAppBar = ({ mobileOpen, isClosing, setMobileOpen }: IProps) => {
  const router = useRouter();

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-light shadow-none text-dark"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH + 16}px)` },
          ml: { sm: `${DRAWER_WIDTH + 16}px` },
          pt: { sm: '16px' },
        }}
      >
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="mr-2 sm:hidden"
          >
            <MenuIcon />
          </IconButton>
          <CustomBreadCrumbs />
          <div>
            <Button variant="text" className="text-dark" onClick={handleLogout}>
              <LogoutIcon className="sm:hidden" />
              <span className="hidden sm:inline-block">Log Out</span>
            </Button>
            <IconButton
              color="inherit"
              aria-label="notifications"
              onClick={() => console.log('// TODO: notifications')}
            >
              <NotificationsIcon className="text-dark" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="account info"
              onClick={() => console.log('// TODO: account')}
            >
              <AccountCircleIcon className="text-dark" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CustomAppBar;
