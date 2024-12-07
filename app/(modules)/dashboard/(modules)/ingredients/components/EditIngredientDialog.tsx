'use client';

import AddIngredientDialog from '@/app/(modules)/dashboard/(modules)/ingredients/components/AddIngredientDialog';
import { IIngredient } from '@/app/(modules)/dashboard/(modules)/ingredients/interfaces';

interface IProps {
  ingredient: IIngredient;
}
const EditIngredientDialog = ({ ingredient }: IProps) => {
  return <AddIngredientDialog ingredientEditValues={ingredient} />;
};

export default EditIngredientDialog;
