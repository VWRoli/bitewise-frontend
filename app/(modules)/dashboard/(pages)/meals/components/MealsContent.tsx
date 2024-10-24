'use client';

import { handleGetAllMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import MealsLoading from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealsLoading';
import MealTableHead from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableHead';
import MealTableRow from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableRow';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MealsContent = () => {
  const { state: userState } = useUserContext();

  const userId = userState.user?.id;

  const { dispatch, state } = useMealsContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      handleGetAllMeals(dispatch, userId);
    }
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <TableFrame
        title="Meals Table"
        setIsOpen={setIsOpen}
        tableHead={<MealTableHead />}
      >
        <TableBody>
          {state.isLoading ? (
            <MealsLoading />
          ) : (
            <>
              {state.meals.length ? (
                state.meals.map((row) => (
                  <MealTableRow key={row.id} row={row} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9}>
                    <Typography variant="h6" align="center">
                      No meals
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </TableFrame>
      <AddMealDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default MealsContent;
