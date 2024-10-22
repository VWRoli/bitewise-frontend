'use client';

import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import MealsLoading from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealsLoading';
import MealTableRow from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableRow';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { TableBody, Typography } from '@mui/material';
import React, { useState } from 'react';

const MealsContent = () => {
  const { state } = useMealsContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col gap-4">
      {state.meals.length === 0 && !state.isLoading && (
        <Typography variant="h6">No meals</Typography>
      )}
      <TableFrame title="Meals Table" setIsOpen={setIsOpen}>
        <TableBody>
          {/* {state.isLoading && <MealsLoading />} */}
          {!state.isLoading && state.meals.length ? (
            state.meals.map((row) => <MealTableRow key={row.id} row={row} />)
          ) : (
            <></>
          )}
        </TableBody>
      </TableFrame>
      <AddMealDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default MealsContent;
