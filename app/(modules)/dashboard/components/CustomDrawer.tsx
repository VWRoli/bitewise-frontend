'use client';

import MenuList from '@/app/(modules)/dashboard/components/MenuList';
import {
  DRAWER_CLASSES,
  DRAWER_WIDTH,
} from '@/app/(modules)/dashboard/constants';
import { Box, Drawer, Toolbar } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  mobileOpen: boolean;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomDrawer = ({
  mobileOpen,
  setMobileOpen,
  setIsClosing,
  children,
}: IProps) => {
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
        slotProps={{
          backdrop: { sx: { backgroundColor: 'transparent' } },
        }}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': DRAWER_CLASSES,
        }}
      >
        <Toolbar />
        {children}
        <MenuList onClose={handleDrawerClose} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': DRAWER_CLASSES,
        }}
        open
      >
        <Toolbar />
        {children}
        <MenuList onClose={handleDrawerClose} />
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
