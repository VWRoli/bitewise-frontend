import MenuList from '@/app/dashboard/components/MenuList';
import { DRAWER_WIDTH } from '@/app/dashboard/constants';
import { Box, Drawer } from '@mui/material';
import { useSession } from 'next-auth/react';
import React from 'react';

interface IProps {
  mobileOpen: boolean;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomDrawer = ({ mobileOpen, setMobileOpen, setIsClosing }: IProps) => {
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        <MenuList />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            maxHeight: '100%',
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        <MenuList />
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
