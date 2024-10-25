import React from 'react';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import {
  ICreateMeal,
  IMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  FormProvider,
  useForm,
  useFieldArray,
  useWatch,
} from 'react-hook-form';
import CustomTextField from '@/app/(modules)/dashboard/components/CustomTextField';
import MealIngredient from '@/app/(modules)/dashboard/(pages)/meals/components/MealIngredient';
import {
  handleCreateMeal,
  handleUpdateMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { DEFAULT_MEAL } from '@/app/(modules)/dashboard/(pages)/meals/constants';

interface IProps {
  open: boolean;
  onClose: () => void;
  mealEditValues?: IMeal | null;
}

const AddMealDialog = ({ open, onClose, mealEditValues }: IProps) => {
  const { state: userState } = useUserContext();
  const { state, dispatch } = useMealsContext();

  const methods = useForm<ICreateMeal>({
    defaultValues: mealEditValues ? mealEditValues : DEFAULT_MEAL,
    mode: 'onBlur',
  });

  const { handleSubmit, reset, control } = methods;
  const { append, remove } = useFieldArray({
    control,
    name: 'mealIngredients',
  });

  const mealIngredients = useWatch({
    control,
    name: 'mealIngredients',
  });

  const addIngredient = () => append({ ingredientId: 0, quantity: 0 });

  const removeIngredient = (index: number) => {
    remove(index);
    const mealIngredients = methods.getValues('mealIngredients');
    mealIngredients.splice(index, 1);
    methods.setValue('mealIngredients', [...mealIngredients]);
  };

  const onSubmit = async (data: ICreateMeal) => {
    if (mealEditValues) {
      await handleUpdateMeal(dispatch, data, mealEditValues.id);
    } else {
      await handleCreateMeal(dispatch, {
        ...data,
        userId: userState.user?.id as number,
      });
    }

    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{mealEditValues ? 'Edit' : 'Add'} Meal</DialogTitle>
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
              {mealIngredients.map((ingredient, index) => (
                <MealIngredient
                  key={index}
                  index={index}
                  removeIngredient={() => removeIngredient(index)}
                />
              ))}
              <Button
                onClick={addIngredient}
                color="primary"
                variant="outlined"
              >
                Add Ingredient
              </Button>
            </div>
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
              {mealEditValues ? 'Edit' : 'Add'}
            </LoadingButton>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default AddMealDialog;
