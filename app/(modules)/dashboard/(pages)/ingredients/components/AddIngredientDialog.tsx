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
import {
  createIngredient,
  updateIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { sendToasts } from '@/app/(modules)/dashboard/(pages)/ingredients/helpers';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';

interface IProps {
  ingredientEditValues?: IIngredient | null;
  onMenuClose?: () => void;
}

const AddIngredientDialog: React.FC<IProps> = (props) => {
  const { ingredientEditValues, onMenuClose } = props;

  const { user } = useUserContext();

  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<ICreateIngredient>({
    defaultValues: ingredientEditValues
      ? ingredientEditValues
      : DEFAULT_INGREDIENT_VALUES,
    mode: 'onBlur',
  });

  const { handleSubmit, watch, reset } = methods;

  const ingredient = watch();

  const onSubmit = async (data: ICreateIngredient) => {
    let result;

    if (ingredientEditValues) {
      result = await updateIngredient(data, ingredientEditValues.id);
    } else {
      result = await createIngredient({
        ...data,
        userId: user?.id,
      });
    }

    sendToasts(ingredientEditValues, result);

    reset();
    handleClose();
  };
  const handleClose = () => {
    onMenuClose && onMenuClose();
    setIsOpen(false);
  };

  const handleEditOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {ingredientEditValues ? (
        <MenuItem onClick={handleEditOpen}>Edit</MenuItem>
      ) : (
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
