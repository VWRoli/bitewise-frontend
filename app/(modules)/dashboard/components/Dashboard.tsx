'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomAppBar from '@/app/(modules)/dashboard/components/CustomAppBar';
import CustomDrawer from '@/app/(modules)/dashboard/components/CustomDrawer';

export default function Dashboard() {
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
