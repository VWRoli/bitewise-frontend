import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import React from 'react';

interface IProps {
  allMeals: IMeal[];
  onMenuClose: () => void;
  mealPlan: IMealPlan;
}

const EditMealPlanDialog = ({ allMeals, onMenuClose, mealPlan }: IProps) => {
  return (
    <AddMealPlanDialog
      allMeals={allMeals}
      onMenuClose={onMenuClose}
      mealPlanEditValues={mealPlan}
    />
  );
};

export default EditMealPlanDialog;
