'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import React from 'react';

interface IProps {
  ingredient: IIngredient;
}
const EditIngredientDialog = ({ ingredient }: IProps) => {
  //TODO: Fix edit ingredient
  return <AddIngredientDialog ingredientEditValues={ingredient} />;
};

export default EditIngredientDialog;
