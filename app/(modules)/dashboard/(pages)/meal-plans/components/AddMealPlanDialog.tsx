import React, { useState } from 'react';
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
import {
  ICreateMealPlan,
  IMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import {
  handleCreateMealPlan,
  handleUpdateMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { convertToOptions } from '@/app/common/helpers';

interface IProps {
  open: boolean;
  onClose: () => void;
  mealPlanEditValues?: IMealPlan | null;
}
const AddMealPlanDialog = ({ open, onClose, mealPlanEditValues }: IProps) => {
  const { state: userState } = useUserContext();
  const { state, dispatch } = useMealPlansContext();
  const { state: mealState } = useMealsContext();

  const [meals, setMeals] = useState<number[]>(
    mealPlanEditValues?.meals.map((el) => el.id) || [],
  );
  const options = convertToOptions(mealState.meals);

  const selectedMeals = options.filter((option) => meals.includes(option.id));

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: ICreateMealPlan = {
      mealIds: meals,
      userId: userState.user?.id as number,
    };
    if (mealPlanEditValues) {
      await handleUpdateMealPlan(dispatch, data, mealPlanEditValues.id);
    } else {
      await handleCreateMealPlan(dispatch, data);
    }
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{mealPlanEditValues ? 'Edit' : 'Add'} Meal Plan</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <Autocomplete
            multiple
            id="meals"
            options={options}
            getOptionLabel={(option) => option.label}
            value={selectedMeals}
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
            {mealPlanEditValues ? 'Edit' : 'Add'}
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddMealPlanDialog;
