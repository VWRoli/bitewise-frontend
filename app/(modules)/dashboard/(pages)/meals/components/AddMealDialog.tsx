import React from 'react';
import { AddDialogProps } from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { ICreateMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';
import CustomTextField from '@/app/(modules)/dashboard/components/CustomTextField';
import MealIngredient from '@/app/(modules)/dashboard/(pages)/meals/components/MealIngredient';
import { handleCreateMeal } from '@/app/(modules)/dashboard/(pages)/meals/actions';

const AddMealDialog = ({ open, onClose }: AddDialogProps) => {
  const { state: userState } = useUserContext();
  const { state, dispatch } = useMealsContext();

  const methods = useForm<ICreateMeal>({
    defaultValues: {
      name: 'Example Meal',
      mealIngredients: [],
    },
    mode: 'onBlur',
  });

  const { handleSubmit, reset, control } = methods;
  const { append, remove } = useFieldArray({
    control,
    name: 'mealIngredients',
  });

  const addIngredient = () => {
    append({ ingredientId: 0, quantity: 0 });
  };

  const removeIngredient = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: ICreateMeal) => {
    await handleCreateMeal(dispatch, {
      ...data,
      userId: userState.user?.id as number,
    });

    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Meal</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <CustomTextField
              name="name"
              label="Name"
              isLoading={state.isLoading}
              type="text"
              rules={{
                required: true,
              }}
            />
            <div className="flex flex-col gap-4">
              {methods.getValues('mealIngredients').map((ingredient, index) => (
                <MealIngredient
                  key={index}
                  ingredient={ingredient}
                  removeIngredient={() => removeIngredient(index)}
                />
              ))}
              <Button onClick={addIngredient} color="primary">
                Add Ingredient
              </Button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
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
      </FormProvider>
    </Dialog>
  );
};

export default AddMealDialog;
