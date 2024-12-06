'use client';

import { Delete } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { Combobox } from '@/app/components/Combobox';
import InputField from '@/app/components/form/InputField';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { convertToOptions } from '@/app/utils/helpers';

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
    <div className="flex items-center gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={`mealIngredients.${index}.ingredientId`}>
          Ingredient
        </Label>
        <Combobox
          form={form}
          name={`mealIngredients.${index}.ingredientId`}
          options={options}
          placeholder="Select ingredient..."
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
