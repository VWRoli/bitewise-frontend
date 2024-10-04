'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomAppBar from '@/app/dashboard/components/CustomAppBar';
import CustomDrawer from '@/app/dashboard/components/CustomDrawer';

export default function Dashboard({ children }: React.PropsWithChildren) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomAppBar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        isClosing={isClosing}
      />
      <CustomDrawer
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setIsClosing={setIsClosing}
      />
    </Box>
  );
}
