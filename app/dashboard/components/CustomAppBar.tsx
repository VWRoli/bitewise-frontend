import { DRAWER_WIDTH } from '@/app/dashboard/constants';
import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname, useRouter } from 'next/navigation';
import { getPathName } from '@/app/dashboard/utils';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { signOut } from 'next-auth/react';

interface IProps {
  mobileOpen: boolean;
  isClosing: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomAppBar = ({ mobileOpen, isClosing, setMobileOpen }: IProps) => {
  const router = useRouter();
  const fullPathName = usePathname();
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const pathName = getPathName(fullPathName);

  const handleLogout = async () => {
    await signOut().then(() => {
      router.push('/');
    });
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <h4 className="first-letter:uppercase">{pathName}</h4>
          <div>
            <Button
              variant="text"
              className="text-white"
              onClick={handleLogout}
            >
              Log Out
            </Button>
            <IconButton
              color="inherit"
              aria-label="notifications"
              onClick={() => console.log('// TODO: notifications')}
            >
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="account info"
              onClick={() => console.log('// TODO: account')}
            >
              <PersonOutlineIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CustomAppBar;
