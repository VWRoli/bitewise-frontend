'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import React from 'react';

interface IProps {
  ingredient: IIngredient;
  onMenuClose: () => void;
}
const EditIngredientDialog = ({ ingredient, onMenuClose }: IProps) => {
  return (
    <AddIngredientDialog
      ingredientEditValues={ingredient}
      onMenuClose={onMenuClose}
    />
  );
};

export default EditIngredientDialog;
