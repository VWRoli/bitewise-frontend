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
import {
  Controller,
  useFormContext,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { Combobox } from '@/app/components/Combobox';
import { Label } from '@/app/components/ui/label';
import InputField from '@/app/components/form/InputField';

interface IMealIngredient {
  ingredientId: number;
  quantity: number;
}

interface IProps {
  index: number;
  allIngredients: IIngredient[];
  form: UseFormReturn<any, any, undefined>;
  onRemove: () => void;
}

const MealIngredient = ({
  index,

  allIngredients,
  form,
  onRemove,
}: IProps) => {
  const options = convertToOptions(allIngredients);

  return (
    <div className="flex gap-4 items-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={`mealIngredients.${index}.ingredientId`}>Meal</Label>
        <Combobox
          form={form}
          name={`mealIngredients.${index}.ingredientId`}
          options={options}
          placeholder="Select meal..."
        />
      </div>

      <InputField
        id={`mealIngredients.${index}.quantity`}
        form={form}
        label="Quantity"
        {...form.register(`mealIngredients.${index}.quantity`)}
        type="number"
      />

      <Button
        aria-label="remove-ingredient"
        variant="destructive"
        onClick={() => onRemove()}
      >
        <Delete />
      </Button>
    </div>
  );
};

export default MealIngredient;
