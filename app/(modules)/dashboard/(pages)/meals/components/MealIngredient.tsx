'use client';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { IOption } from '@/utils/interfaces';
import { convertToOptions } from '@/utils/helpers';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { Delete } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Controller, useFormContext, UseFormSetValue } from 'react-hook-form';

interface IMealIngredient {
  ingredientId: number;
  quantity: number;
}

interface IProps {
  index: number;
  ingredient: IMealIngredient;
  allIngredients: IIngredient[];
  removeIngredient: () => void;
}

const MealIngredient = ({
  index,
  ingredient,
  removeIngredient,
  allIngredients,
}: IProps) => {
  const { control, setValue } = useFormContext();

  const options = convertToOptions(allIngredients);

  const handleAutocompleteChange = (
    _: React.SyntheticEvent,
    value: IOption | null,
  ) => {
    console.log('run');
    setValue(`mealIngredients[${index}].ingredientId`, value ? value.id : 0);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(`mealIngredients[${index}].quantity`, Number(e.target.value));
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
        // onFocus={() => {
        //   if (ingredient.quantity === 0) {
        //     setFormData((prevData: any) => ({
        //       ...prevData,
        //       mealIngredients: prevData.mealIngredients.map(
        //         (ing: any, i: number) =>
        //           i === index ? { ...ing, quantity: '' } : ing,
        //       ),
        //     }));
        //   }
        // }}
        variant="outlined"
        className="flex-1"
      />

      <Button
        aria-label="remove-ingredient"
        variant="destructive"
        onClick={removeIngredient}
      >
        <Delete />
      </Button>
    </div>
  );
};

export default MealIngredient;
