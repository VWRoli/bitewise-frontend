'use client';
import MealCard from '@/app/(modules)/dashboard/(pages)/meals/components/MealCard';
import MealsLoading from '@/app/(modules)/dashboard/(pages)/meals/components/MealsLoading';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { Typography } from '@mui/material';
import React from 'react';

const MealsContent = () => {
  const { state } = useMealsContext();
  // console.log('state', state);
  if (state.isLoading) {
    return <MealsLoading />;
  }

  return (
    <section className="flex flex-col gap-4">
      {state.meals.length === 0 && !state.isLoading && (
        <Typography variant="h6">No meals</Typography>
      )}
      {state.meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </section>
  );
};

export default MealsContent;
