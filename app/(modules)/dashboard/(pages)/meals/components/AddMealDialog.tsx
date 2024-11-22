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
  TextField,
} from '@mui/material';
import MealIngredient from '@/app/(modules)/dashboard/(pages)/meals/components/MealIngredient';
import { DEFAULT_MEAL } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { IError } from '@/app/common/interfaces/error.interface';

interface IProps {
  userId: number;
  mealEditValues?: IMeal | null;
}

const AddMealDialog = ({ mealEditValues, userId }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<IError | null>(null);

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
      //await handleUpdateMeal(dispatch, formData, mealEditValues.id);
    } else {
      // await handleCreateMeal(dispatch, {
      //   ...formData,
      //   userId,
      // });
    }

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

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {!mealEditValues && (
        <div className="text-white">
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setIsOpen(true)}
          >
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
