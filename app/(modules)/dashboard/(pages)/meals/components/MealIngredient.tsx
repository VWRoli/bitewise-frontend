'use client';

import React from 'react';
import { Button } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { IOption } from '@/utils/interfaces';
import { convertToOptions } from '@/utils/helpers';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';

interface IMealIngredient {
  ingredientId: number;
  quantity: number;
}

interface IProps {
  index: number;
  ingredient: IMealIngredient;
  allIngredients: IIngredient[];
  onIngredientChange: (key: string, value: any) => void;
  removeIngredient: () => void;
  setFormData: (value: any) => void;
}

const MealIngredient = ({
  index,
  ingredient,
  onIngredientChange,
  removeIngredient,
  setFormData,
  allIngredients,
}: IProps) => {
  const options = convertToOptions(allIngredients);

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: IOption | null,
  ) => {
    onIngredientChange('ingredientId', value ? value.id : 0);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onIngredientChange('quantity', Number(e.target.value));
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="mb-1 mt-2 flex-1">
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={handleAutocompleteChange}
          value={
            options.find((opt) => opt.id === ingredient.ingredientId) || null
          }
          renderInput={(params) => <TextField {...params} label="Ingredient" />}
        />
      </div>
      <TextField
        name={`mealIngredients[${index}].quantity`}
        label="Quantity"
        value={ingredient.quantity}
        onChange={handleQuantityChange}
        type="number"
        onFocus={() => {
          if (ingredient.quantity === 0) {
            setFormData((prevData: any) => ({
              ...prevData,
              mealIngredients: prevData.mealIngredients.map(
                (ing: any, i: number) =>
                  i === index ? { ...ing, quantity: '' } : ing,
              ),
            }));
          }
        }}
        variant="outlined"
        className="flex-1"
      />

      <Button
        aria-label="remove-ingredient"
        color="error"
        variant="contained"
        onClick={removeIngredient}
      >
        <RemoveOutlinedIcon />
      </Button>
    </div>
  );
};

export default MealIngredient;
