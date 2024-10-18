'use client';

import MealPlanCard from '@/app/(modules)/dashboard/(pages)/meal-plans/components/MealPlanCard';
import MealPlansLoading from '@/app/(modules)/dashboard/(pages)/meal-plans/components/MealPlansLoading';
import { useMealPlansContext } from '@/app/(modules)/dashboard/(pages)/meal-plans/context';
import { Typography } from '@mui/material';
import React from 'react';

const MealPlansContent = () => {
  const { state } = useMealPlansContext();

  if (state.isLoading) {
    return <MealPlansLoading />;
  }

  return (
    <section className="flex flex-col gap-4">
      {state.mealPlans.length === 0 && !state.isLoading && (
        <Typography variant="h6">No meal plans</Typography>
      )}
      {state.mealPlans.map((mealPlan) => (
        <MealPlanCard key={mealPlan.id} mealPlan={mealPlan} />
      ))}
    </section>
  );
};

export default MealPlansContent;
