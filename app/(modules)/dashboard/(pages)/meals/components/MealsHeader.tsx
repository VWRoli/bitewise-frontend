'use client';
import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const MealsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between">
        <Typography variant="h4">Meals</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          Add New
        </Button>
      </section>
      <AddMealDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MealsHeader;
