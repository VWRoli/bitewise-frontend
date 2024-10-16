import CustomTextField from '@/app/(modules)/dashboard/components/CustomTextField';
import { Button } from '@mui/material';
import React from 'react';
import { AutocompleteElement } from 'react-hook-form-mui';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { convertToOptions } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { ICreateMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { IOption } from '@/app/common/interfaces';

interface IProps {
  ingredient: ICreateMealIngredient;
  removeIngredient: (ingredientId: number) => void;
}
const MealIngredient = ({ ingredient, removeIngredient }: IProps) => {
  const { state } = useIngredientsContext();
  const options = convertToOptions(state.ingredients);

  const handleRemoveIngredient = () => {
    removeIngredient(ingredient.ingredientId);
  };

  const handleAutocompleteChange = (_: any, value: IOption | null) => {
    ingredient.ingredientId = value ? value.id : 0;
  };
  return (
    <div className="flex gap-4 items-center">
      <div className="mb-1 mt-2">
        <AutocompleteElement
          label="Ingredient"
          name={`mealIngredients[${ingredient.ingredientId}].ingredientId`}
          options={options}
          autocompleteProps={{
            getOptionLabel: (option) => option.label,
            isOptionEqualToValue: (option, value) =>
              option.id === (value as unknown as number),
            onChange: handleAutocompleteChange,
          }}
        />
      </div>
      <CustomTextField
        name={`mealIngredients[${ingredient.ingredientId}].quantity`}
        label="Quantity"
        isLoading={state.isLoading}
        type="number"
      />
      <Button
        aria-label="remove-ingredient"
        color="error"
        variant="contained"
        onClick={handleRemoveIngredient}
      >
        <RemoveOutlinedIcon />
      </Button>
    </div>
  );
};

export default MealIngredient;
