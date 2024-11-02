import React from 'react';
import { Button } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { IOption } from '@/app/common/interfaces';
import { convertToOptions } from '@/app/common/helpers';

interface IIngredient {
  ingredientId: number;
  quantity: number;
}

interface IProps {
  index: number;
  ingredient: IIngredient;
  onIngredientChange: (key: string, value: any) => void;
  removeIngredient: () => void;
  isLoading: boolean;
  setFormData: (value: any) => void;
}

const MealIngredient = ({
  index,
  ingredient,
  onIngredientChange,
  removeIngredient,
  isLoading,
  setFormData,
}: IProps) => {
  const { state } = useIngredientsContext();
  const options = convertToOptions(state.ingredients);

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
        disabled={isLoading}
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
