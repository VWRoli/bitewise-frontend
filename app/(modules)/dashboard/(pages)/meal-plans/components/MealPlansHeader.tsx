'use client';
import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const MealPlansHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between">
        <Typography variant="h4">Meal Plans</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          Add New
        </Button>
      </section>
      <AddMealPlanDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MealPlansHeader;
