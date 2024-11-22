'use client';

import React, { useEffect, useState } from 'react';
import {
  ICreateMeal,
  IMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import MealIngredient from '@/app/(modules)/dashboard/(pages)/meals/components/MealIngredient';
import { DEFAULT_MEAL } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import {
  createMeal,
  updateMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { createOrUpdateToasts } from '@/app/common/helpers';
import { EActionType } from '@/app/common/enums';

interface IProps {
  ingredients: IIngredient[];
  mealEditValues?: IMeal | null;
  onMenuClose?: () => void;
}

const AddMealDialog = (props: IProps) => {
  const { mealEditValues, ingredients, onMenuClose } = props;
  const [isOpen, setIsOpen] = useState(false);

  const initialFormData = mealEditValues || DEFAULT_MEAL;
  const [formData, setFormData] = useState<ICreateMeal>(initialFormData);
  const [nameRequiredError, setNameRequiredError] = useState(false);

  const { user } = useUserContext();

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
    let result;

    if (mealEditValues) {
      result = await updateMeal(formData, mealEditValues.id);
    } else {
      result = await createMeal({
        ...formData,
        userId: user?.id,
      });
    }

    createOrUpdateToasts(
      mealEditValues ? EActionType.UPDATE : EActionType.CREATE,
      result,
    );

    reset();
  };

  const handleCancel = () => {
    reset();
  };

  const reset = () => {
    setFormData(DEFAULT_MEAL);
    setNameRequiredError(false);
    handleClose();
  };

  const handleClose = () => {
    onMenuClose && onMenuClose();
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {mealEditValues ? (
        <MenuItem onClick={handleOpen}>Edit</MenuItem>
      ) : (
        <div className="text-white">
          <Button variant="outlined" color="inherit" onClick={handleOpen}>
            Add
          </Button>
        </div>
      )}

      <Dialog open={isOpen} onClose={handleClose} fullWidth>
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
            />
            <div className="flex flex-col gap-4">
              {formData.mealIngredients.map((ingredient, index) => (
                <MealIngredient
                  key={index}
                  index={index}
                  ingredient={ingredient}
                  onIngredientChange={(key, value) =>
                    handleIngredientChange(index, key, value)
                  }
                  allIngredients={ingredients}
                  removeIngredient={() => removeIngredient(index)}
                  setFormData={setFormData}
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
            <Button type="submit" variant="contained" color="primary">
              {mealEditValues ? 'Edit' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddMealDialog;
