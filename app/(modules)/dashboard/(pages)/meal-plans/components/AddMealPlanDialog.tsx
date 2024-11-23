'use client';
import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import {
  ICreateMealPlan,
  IMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { convertToOptions, createOrUpdateToasts } from '@/utils/helpers';
import { IOption } from '@/utils/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import {
  createMealPlan,
  updateMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import { EActionType } from '@/utils/enums';

interface IProps {
  allMeals: IMeal[];
  mealPlanEditValues?: IMealPlan | null;
  onMenuClose?: () => void;
}
const AddMealPlanDialog = ({
  mealPlanEditValues,
  onMenuClose,
  allMeals,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialMeals = mealPlanEditValues?.meals.map((el) => el.id) || [];
  const [meals, setMeals] = useState<number[]>(initialMeals);

  const [nameRequiredError, setNameRequiredError] = useState(false);

  const initialName = mealPlanEditValues?.name || '';
  const [name, setName] = useState(initialName);
  const options: IOption[] = convertToOptions(allMeals);

  const mealsWithDuplicates = meals.map((mealId) =>
    options.find((option) => option.id === mealId),
  );
  // const selectedMeals = mealsWithDuplicates.filter(
  //   (meal) => meal !== undefined,
  // ) as (typeof options)[0][];

  const { user } = useUserContext();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (name === '') {
      setNameRequiredError(true);
      return;
    }

    const data: ICreateMealPlan = {
      name,
      mealIds: meals,
      userId: user?.id,
    };

    let result;

    if (mealPlanEditValues) {
      result = await updateMealPlan(data, mealPlanEditValues.id);
    } else {
      result = await createMealPlan(data);
    }

    createOrUpdateToasts(
      mealPlanEditValues ? EActionType.UPDATE : EActionType.CREATE,
      result,
    );

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

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {mealPlanEditValues ? (
        <MenuItem onClick={handleOpen}>Edit</MenuItem>
      ) : (
        <div className="text-white">
          <Button variant="outlined" color="inherit" onClick={handleOpen}>
            Add
          </Button>
        </div>
      )}
      <Dialog open={isOpen} onClose={handleClose} fullWidth>
        <DialogTitle>
          {mealPlanEditValues ? 'Edit' : 'Add'} Meal Plan
        </DialogTitle>
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
              // defaultValue={selectedMeals}
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
    </>
  );
};

export default AddMealPlanDialog;
