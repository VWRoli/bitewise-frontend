'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';

interface IProps {
  ingredient: IIngredient;
}
const EditIngredientDialog = ({ ingredient }: IProps) => {
  return <AddIngredientDialog ingredientEditValues={ingredient} />;
};

export default EditIngredientDialog;
