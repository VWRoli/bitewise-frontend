'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import IngredientsLoading from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientsLoading';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableHead';
import IngredientTableRow from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableRow';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { TableBody, Typography } from '@mui/material';
import React, { useState } from 'react';

const IngredientsContent = () => {
  const { state } = useIngredientsContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col gap-4">
      {state.ingredients.length === 0 && !state.isLoading && (
        <Typography variant="h6">No ingredients</Typography>
      )}
      <TableFrame
        title="Ingredients Table"
        setIsOpen={setIsOpen}
        tableHead={<IngredientTableHead />}
      >
        <TableBody>
          {state.isLoading && <IngredientsLoading />}
          {!state.isLoading &&
            state.ingredients.length &&
            state.ingredients.map((row) => (
              <IngredientTableRow key={row.id} row={row} />
            ))}
        </TableBody>
      </TableFrame>
      <AddIngredientDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default IngredientsContent;
