import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import React from 'react';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  meal: IMeal;
}
const EditMealDialog = ({ isOpen, setIsOpen, meal }: IProps) => {
  return (
    <AddMealDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      // mealEditValues={meal}
    />
  );
};

export default EditMealDialog;
