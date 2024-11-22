import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import React from 'react';

interface IProps {
  ingredients: IIngredient[];
  meal: IMeal;
  onMenuClose: () => void;
}
const EditMealDialog = ({ meal, ingredients, onMenuClose }: IProps) => {
  return (
    <AddMealDialog
      mealEditValues={meal}
      ingredients={ingredients}
      onMenuClose={onMenuClose}
    />
  );
};

export default EditMealDialog;
