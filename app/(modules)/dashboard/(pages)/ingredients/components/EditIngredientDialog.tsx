import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import React from 'react';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ingredient: IIngredient;
}
const EditIngredientDialog = ({ isOpen, setIsOpen, ingredient }: IProps) => {
  return (
    <AddIngredientDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      ingredientEditValues={ingredient}
    />
  );
};

export default EditIngredientDialog;
