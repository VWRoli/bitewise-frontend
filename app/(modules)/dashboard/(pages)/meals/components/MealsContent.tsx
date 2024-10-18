'use client';
import MealCard from '@/app/(modules)/dashboard/(pages)/meals/components/MealCard';
import MealsLoading from '@/app/(modules)/dashboard/(pages)/meals/components/MealsLoading';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { Grid2, Typography } from '@mui/material';
import React from 'react';

const MealsContent = () => {
  const { state } = useMealsContext();

  if (state.isLoading) {
    return <MealsLoading />;
  }

  return (
    <section className="flex flex-col gap-4">
      {state.meals.length === 0 && !state.isLoading && (
        <Typography variant="h6">No meals</Typography>
      )}
      <Grid2 container spacing={4}>
        {state.meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </Grid2>
    </section>
  );
};

export default MealsContent;
