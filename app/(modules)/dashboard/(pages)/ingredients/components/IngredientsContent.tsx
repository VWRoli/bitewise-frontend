'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import IngredientsLoading from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientsLoading';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientTableHead';
import IngredientTableRow from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientTableRow';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { Button, Table, TableBody, Typography } from '@mui/material';
import React, { useState } from 'react';

const IngredientsContent = () => {
  const { state } = useIngredientsContext();

  const [isOpen, setIsOpen] = useState(false);

  if (state.isLoading) {
    return <IngredientsLoading />;
  }
  return (
    <section className="flex flex-col gap-4">
      {state.ingredients.length === 0 && !state.isLoading && (
        <Typography variant="h6">No ingredients</Typography>
      )}
      {!state.isLoading && (
        <div className="shadow-md bg-white rounded-xl">
          <div className="px-4">
            <div className="bg-table-header rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
              <Typography variant="h6" className="text-base text-white">
                Ingredients Table
              </Typography>
              <div className="text-white">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => setIsOpen(true)}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
          <div className="h-4"></div>
          <Table sx={{ minWidth: 650 }} aria-label="Ingredients table">
            <IngredientTableHead />
            <TableBody>
              {state.ingredients.map((row) => (
                <IngredientTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <AddIngredientDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default IngredientsContent;
