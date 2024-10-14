import React, { useCallback, useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
} from '@mui/material';
import { ICreateIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';
import { EUnit } from '@/app/dashboard/(pages)/ingredients/enums';
import { useSession } from 'next-auth/react';
import { handleCreateIngredient } from '@/app/dashboard/(pages)/ingredients/actions';
import { useIngredientsContext } from '@/app/dashboard/(pages)/ingredients/context';
import { LoadingButton } from '@mui/lab';
import CustomTextField from '@/app/dashboard/components/CustomTextField';
import { ADD_INGRENDIENT_FIELDS } from '@/app/dashboard/(pages)/ingredients/constants';

export interface AddDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddIngredientDialog: React.FC<AddDialogProps> = ({ open, onClose }) => {
  const { data: session } = useSession();
  const { state, dispatch } = useIngredientsContext();

  const [ingredient, setIngredient] = useState<ICreateIngredient>({
    name: 'Example Ingredient',
    protein: 10,
    totalFat: 5,
    saturatedFat: 2,
    totalCarbohydrates: 20,
    sugar: 5,
    dietaryFiber: 3,
    calories: 150,
    unit: EUnit.HUNDRED_GRAMS,
    price: 1.99,
    userId: +(session?.user?.id || 0) as number,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(ingredient).every(
      (value) => value !== '' && value !== 0,
    );
    setIsFormValid(isValid);
  }, [ingredient]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredient({
      ...ingredient,
      [name]: name === 'unit' || name === 'name' ? value : parseFloat(value),
    });
  }, []);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (parseFloat(e.target.value) === 0) {
      setIngredient({
        ...ingredient,
        [e.target.name]: '',
      });
    }
  }, []);

  const handleSubmit = async () => {
    await handleCreateIngredient(dispatch, ingredient);

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Ingredient</DialogTitle>
      <DialogContent>
        {ADD_INGRENDIENT_FIELDS.map((field) => (
          <CustomTextField
            key={field.name}
            name={field.name}
            label={field.label}
            value={ingredient[field.name as keyof ICreateIngredient]}
            onChange={handleChange}
            onFocus={field.type === 'number' ? handleFocus : undefined}
            isLoading={state.isLoading}
            type={field.type}
            required={field.required}
          />
        ))}
        <CustomTextField
          name="unit"
          label="Unit"
          value={ingredient.unit}
          onChange={handleChange}
          isLoading={state.isLoading}
          select
        >
          {Object.values(EUnit).map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </CustomTextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <LoadingButton
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          loading={state.isLoading}
          disabled={!isFormValid}
        >
          Add
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddIngredientDialog;
