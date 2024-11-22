'use client';
import React, { useEffect, useState } from 'react';
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
import { convertToOptions } from '@/app/common/helpers';
import { IOption } from '@/app/common/interfaces';

interface IProps {
  mealPlanEditValues?: IMealPlan | null;
}
const AddMealPlanDialog = ({ mealPlanEditValues }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialMeals = mealPlanEditValues?.meals.map((el) => el.id) || [];
  const [meals, setMeals] = useState<number[]>(initialMeals);

  const [nameRequiredError, setNameRequiredError] = useState(false);

  const initialName = mealPlanEditValues?.name || '';
  const [name, setName] = useState(initialName);
  const options: IOption[] = []; //convertToOptions(meals);

  const mealsWithDuplicates = meals.map((mealId) =>
    options.find((option) => option.id === mealId),
  );
  const selectedMeals = mealsWithDuplicates.filter(
    (meal) => meal !== undefined,
  ) as (typeof options)[0][];

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (name === '') {
      setNameRequiredError(true);
      return;
    }

    const data: ICreateMealPlan = {
      name,
      mealIds: meals,
      userId: 1, //userState.user?.id as number,
    };
    if (mealPlanEditValues) {
      // await handleUpdateMealPlan(dispatch, data, mealPlanEditValues.id);
    } else {
      //await handleCreateMealPlan(dispatch, data);
    }
    handleClose();
    reset();
  };

  useEffect(() => {
    setName(initialName);
    setMeals(initialMeals);
    setNameRequiredError(false);
  }, [mealPlanEditValues]);

  const reset = () => {
    setName('');
    setMeals([]);
  };

  const handleCancel = () => {
    handleClose();
    reset();
  };

  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogTitle>{mealPlanEditValues ? 'Edit' : 'Add'} Meal Plan</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent className="flex flex-col gap-4">
          <TextField
            label="Name"
            variant="outlined"
            placeholder="Meal plan name"
            fullWidth
            value={name}
            onChange={(e) => {
              if (e.target.value === '') {
                setNameRequiredError(true);
              }
              setName(e.target.value);
              setNameRequiredError(false);
            }}
            error={nameRequiredError}
            helperText={nameRequiredError && 'Name is required'}
          />

          <Autocomplete
            multiple
            id="meals"
            options={options}
            getOptionLabel={(option) => option.label}
            //defaultValue={selectedMeals}
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
          <Button type="submit" variant="contained" color="primary">
            {mealPlanEditValues ? 'Edit' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddMealPlanDialog;
