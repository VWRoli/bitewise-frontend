'use client';

import { handleGetAllMealPlans } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import MealPlansLoading from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlansLoading';
import MealPlanTableHead from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableHead';
import MealPlanTableRow from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableRow';
import { useMealPlansContext } from '@/app/(modules)/dashboard/(pages)/meal-plans/context';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MealPlansContent = () => {
  const { state: userState } = useUserContext();
  const { dispatch, state } = useMealPlansContext();

  const [isOpen, setIsOpen] = useState(false);

  const userId = userState.user?.id;

  useEffect(() => {
    if (userId) {
      handleGetAllMealPlans(dispatch, userId);
    }
  }, [userId]);

  return (
    <section className="flex flex-col gap-4">
      <TableFrame
        title="Meal plans Table"
        setIsOpen={setIsOpen}
        tableHead={<MealPlanTableHead />}
      >
        <TableBody>
          {state.isLoading ? (
            <MealPlansLoading />
          ) : (
            <>
              {state.mealPlans.length ? (
                state.mealPlans.map((row) => (
                  <MealPlanTableRow key={row.id} row={row} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9}>
                    <Typography variant="h6" align="center">
                      No meal plans
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </TableFrame>
      <AddMealPlanDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default MealPlansContent;
