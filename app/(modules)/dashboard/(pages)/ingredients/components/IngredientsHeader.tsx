'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const IngredientsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex justify-between">
      <Typography variant="h4">Ingredients</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        Add New
      </Button>
      <AddIngredientDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default IngredientsHeader;
