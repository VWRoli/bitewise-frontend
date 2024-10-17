import CustomTextField from '@/app/(modules)/dashboard/components/CustomTextField';
import { Button } from '@mui/material';
import React from 'react';
import { AutocompleteElement, useFormContext } from 'react-hook-form-mui';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { IOption } from '@/app/common/interfaces';
import { convertToOptions } from '@/app/common/helpers';

interface IProps {
  index: number;
  removeIngredient: (index: number) => void;
}
const MealIngredient = ({ index, removeIngredient }: IProps) => {
  const { state } = useIngredientsContext();
  const { setValue } = useFormContext();
  const options = convertToOptions(state.ingredients);

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: IOption | null,
  ) => {
    setValue(`mealIngredients[${index}].ingredientId`, value ? value.id : 0);
  };
  return (
    <div className="flex gap-4 items-center">
      <div className="mb-1 mt-2">
        <AutocompleteElement
          label="Ingredient"
          name={`mealIngredients[${index}].ingredientId`}
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
        name={`mealIngredients[${index}].quantity`}
        label="Quantity"
        isLoading={state.isLoading}
        type="number"
      />
      <Button
        aria-label="remove-ingredient"
        color="error"
        variant="contained"
        onClick={() => removeIngredient(index)}
      >
        <RemoveOutlinedIcon />
      </Button>
    </div>
  );
};

export default MealIngredient;
