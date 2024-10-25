import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import React from 'react';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mealPlan: IMealPlan;
}

const EditMealPlanDialog = ({ isOpen, setIsOpen, mealPlan }: IProps) => {
  return (
    <AddMealPlanDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      mealPlanEditValues={mealPlan}
    />
  );
};

export default EditMealPlanDialog;
