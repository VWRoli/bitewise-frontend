import { AddDialogProps } from '@/app/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { ICreateMeal } from '@/app/dashboard/(pages)/meals/interfaces';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';

const AddMealDialog = ({ open, onClose }: AddDialogProps) => {
  const [meal, setMeal] = useState<ICreateMeal>({
    name: 'Example Meal',
    mealIngredients: [],
    userId: 1, //+(session?.user?.id || 0) as number,
  });
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Meal</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <LoadingButton
          //onClick={handleSubmit}
          variant="contained"
          color="primary"
          //loading={state.isLoading}
          //disabled={!isFormValid}
        >
          Add
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddMealDialog;
