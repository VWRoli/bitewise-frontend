'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
} from '@mui/material';
import {
  ICreateIngredient,
  IIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { EUnit } from '@/app/(modules)/dashboard/(pages)/ingredients/enums';
import CustomTextField from '@/app/(modules)/dashboard/components/CustomTextField';
import {
  ADD_INGRENDIENT_FIELDS,
  DEFAULT_INGREDIENT_VALUES,
} from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { useForm, FormProvider } from 'react-hook-form';
import { createIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { IError } from '@/app/common/interfaces/error.interface';
import CustomError from '@/app/common/components/Error';

interface IProps {
  ingredientEditValues?: IIngredient | null;
}

const AddIngredientDialog: React.FC<IProps> = ({ ingredientEditValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<IError | null>(null);

  const methods = useForm<ICreateIngredient>({
    defaultValues: ingredientEditValues
      ? ingredientEditValues
      : DEFAULT_INGREDIENT_VALUES,
    mode: 'onBlur',
  });

  const { handleSubmit, watch, reset } = methods;

  const ingredient = watch();

  const onSubmit = async (data: ICreateIngredient) => {
    if (ingredientEditValues) {
      //await handleUpdateIngredient(dispatch, data, ingredientEditValues.id);
    } else {
      const result = await createIngredient({
        ...data,
        userId: 1, //TODO: need user id
      });
      if (result.error) {
        setError(result as IError);
        return;
      }
    }
    reset();
    handleClose();
  };
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {!ingredientEditValues && (
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
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
          {ingredientEditValues ? 'Edit' : 'Add'} Ingredient
        </DialogTitle>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              {ADD_INGRENDIENT_FIELDS.map((field) => (
                <CustomTextField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  rules={{
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                    min:
                      field.type === 'number'
                        ? {
                            value: 0,
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
              {error && <CustomError result={error} />}
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                {ingredientEditValues ? 'Edit' : 'Add'}
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default AddIngredientDialog;
