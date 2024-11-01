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

  const [formData, setFormData] = useState<ICreateMeal>(
    mealEditValues || DEFAULT_MEAL,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

    if (mealEditValues) {
      await handleUpdateMeal(dispatch, formData, mealEditValues.id);
    } else {
      await handleCreateMeal(dispatch, {
        ...formData,
        userId: userState.user?.id as number,
      });
    }

    setFormData(DEFAULT_MEAL);
    onClose();
  };

  const handleCancel = () => {
    setFormData(DEFAULT_MEAL);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{mealEditValues ? 'Edit' : 'Add'} Meal</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
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
