'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import React from 'react';

interface IProps {
  userId: number;
  ingredient: IIngredient;
  onMenuClose: () => void;
}
const EditIngredientDialog = ({ ingredient, userId, onMenuClose }: IProps) => {
  return (
    <AddIngredientDialog
      ingredientEditValues={ingredient}
      userId={userId}
      onMenuClose={onMenuClose}
    />
  );
};

export default EditIngredientDialog;
