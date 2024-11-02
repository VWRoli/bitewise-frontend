import React, { useEffect, useState } from 'react';
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
  TextField,
} from '@mui/material';
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

  const initialFormData = mealEditValues || DEFAULT_MEAL;
  const [formData, setFormData] = useState<ICreateMeal>(initialFormData);
  const [nameRequiredError, setNameRequiredError] = useState(false);

  const addIngredient = () => {
    setFormData((prevData) => ({
      ...prevData,
      mealIngredients: [
        ...prevData.mealIngredients,
        { ingredientId: 0, quantity: 0 },
      ],
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      mealIngredients: prevData.mealIngredients.filter((_, i) => i !== index),
    }));
  };

  const handleIngredientChange = (index: number, key: string, value: any) => {
    const updatedIngredients = formData.mealIngredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [key]: value } : ingredient,
    );
    setFormData((prevData) => ({
      ...prevData,
      mealIngredients: updatedIngredients,
    }));
  };

  useEffect(() => {
    setFormData(mealEditValues || DEFAULT_MEAL);
  }, [mealEditValues]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name === '') {
      setNameRequiredError(true);
      return;
    }

    if (mealEditValues) {
      await handleUpdateMeal(dispatch, formData, mealEditValues.id);
    } else {
      await handleCreateMeal(dispatch, {
        ...formData,
        userId: userState.user?.id as number,
      });
    }

    reset();
  };

  const handleCancel = () => {
    reset();
  };

  const reset = () => {
    setFormData(DEFAULT_MEAL);
    setNameRequiredError(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{mealEditValues ? 'Edit' : 'Add'} Meal</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogContent className="flex flex-col gap-4">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => {
              if (e.target.value === '') {
                setNameRequiredError(true);
              }
              setFormData((prevData) => ({
                ...prevData,
                name: e.target.value,
              }));
              setNameRequiredError(false);
            }}
            error={nameRequiredError}
            helperText={nameRequiredError && 'Name is required'}
            disabled={state.isLoading}
          />
          <div className="flex flex-col gap-4">
            {formData.mealIngredients.map((ingredient, index) => (
              <MealIngredient
                key={index}
                index={index}
                isLoading={state.isLoading}
                ingredient={ingredient}
                onIngredientChange={(key, value) =>
                  handleIngredientChange(index, key, value)
                }
                removeIngredient={() => removeIngredient(index)}
                setFormData={setFormData}
              />
            ))}
            <Button onClick={addIngredient} color="primary" variant="outlined">
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
    </Dialog>
  );
};

export default AddMealDialog;
