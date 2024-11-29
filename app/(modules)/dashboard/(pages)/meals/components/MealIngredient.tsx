'use client';

import { IOption } from '@/app/utils/interfaces';
import { convertToOptions } from '@/app/utils/helpers';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { Delete } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { Controller, useFormContext, UseFormSetValue } from 'react-hook-form';
import { Combobox } from '@/app/components/Combobox';
import { Label } from '@/app/components/ui/label';

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
    //TODO: fix fieldarray
    setValue(`mealIngredients[${index}].ingredientId`, value ? value.value : 0);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(`mealIngredients[${index}].quantity`, Number(e.target.value));
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="meal">Meal</Label>
        <Combobox options={options} placeholder="Select meal..." />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" placeholder="Quantity" type="number" />
      </div>

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
