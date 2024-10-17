import React, { useState } from 'react';
import { AddDialogProps } from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { useMealPlansContext } from '@/app/(modules)/dashboard/(pages)/meal-plans/context';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { LoadingButton } from '@mui/lab';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { ICreateMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { handleCreateMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { convertToOptions } from '@/app/common/helpers';

const AddMealPlanDialog = ({ open, onClose }: AddDialogProps) => {
  const { state: userState } = useUserContext();
  const { state, dispatch } = useMealPlansContext();
  const { state: mealState } = useMealsContext();

  const [meals, setMeals] = useState<number[]>([]);

  const options = convertToOptions(mealState.meals);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: ICreateMealPlan = {
      mealIds: meals,
      userId: userState.user?.id as number,
    };

    await handleCreateMealPlan(dispatch, data);

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Meal Plan</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <Autocomplete
            multiple
            id="meals"
            options={options}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => setMeals(value.map((meal) => meal.id))}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Meals"
                placeholder="Select meals"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary" variant="outlined">
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
      </form>
    </Dialog>
  );
};

export default AddMealPlanDialog;
