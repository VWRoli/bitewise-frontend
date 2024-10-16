import React, { useCallback, useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
} from '@mui/material';
import { ICreateIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { EUnit } from '@/app/(modules)/dashboard/(pages)/ingredients/enums';
import { handleCreateIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { LoadingButton } from '@mui/lab';
import CustomTextField from '@/app/(modules)/dashboard/components/CustomTextField';
import { ADD_INGRENDIENT_FIELDS } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { useForm, FormProvider } from 'react-hook-form';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';

export interface AddDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddIngredientDialog: React.FC<AddDialogProps> = ({ open, onClose }) => {
  const { state, dispatch } = useIngredientsContext();
  const { state: userState } = useUserContext();

  const methods = useForm<ICreateIngredient>({
    defaultValues: {
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
    },
    mode: 'onBlur',
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = methods;

  const ingredient = watch();

  const onSubmit = async (data: ICreateIngredient) => {
    await handleCreateIngredient(dispatch, {
      ...data,
      userId: userState.user?.id as number,
    });
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Ingredient</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            {ADD_INGRENDIENT_FIELDS.map((field) => (
              <CustomTextField
                key={field.name}
                name={field.name}
                label={field.label}
                isLoading={state.isLoading}
                type={field.type}
                rules={{
                  required: field.required
                    ? `${field.label} is required`
                    : false,
                  min:
                    field.type === 'number'
                      ? {
                          value: 1,
                          message: `${field.label} must be greater than 0`,
                        }
                      : undefined,
                }}
              />
            ))}
            <CustomTextField
              name="unit"
              label="Unit"
              value={ingredient.unit}
              isLoading={state.isLoading}
              rules={{ required: 'Unit is required' }}
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

export default AddIngredientDialog;
