'use client';
import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import React from 'react';

interface IProps {
  meal: IMeal;
}
const EditMealDialog = ({ meal }: IProps) => {
  return <AddMealDialog mealEditValues={meal} />;
};

export default EditMealDialog;
