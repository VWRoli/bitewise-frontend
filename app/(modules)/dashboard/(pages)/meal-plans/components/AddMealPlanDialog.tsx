import React from 'react';
import { AddDialogProps } from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { useMealPlansContext } from '@/app/(modules)/dashboard/(pages)/meal-plans/context';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ICreateMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';

const AddMealPlanDialog = ({ open, onClose }: AddDialogProps) => {
  const { state: userState } = useUserContext();
  const { state, dispatch } = useMealPlansContext();

  const onSubmit = async (data: ICreateMealPlan) => {
    // await handleCreateMealPlan(dispatch, {
    //   ...data,
    //   userId: userState.user?.id as number,
    // });

    onClose();
  };

  const handleCancle = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Meal Plan</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleCancle} color="primary" variant="outlined">
          Cancel
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          loading={state.isLoading}
        >
          Add
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddMealPlanDialog;
