import { EUnit } from '@/app/(modules)/dashboard/(pages)/ingredients/enums';
import { z } from 'zod';

export const ingredientSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  protein: z.number().min(0, { message: 'Protein must be a positive number' }),
  totalFat: z
    .number()
    .min(0, { message: 'Total Fat must be a positive number' }),
  saturatedFat: z
    .number()
    .min(0, { message: 'Saturated Fat must be a positive number' }),
  totalCarbohydrates: z
    .number()
    .min(0, { message: 'Total Carbohydrates must be a positive number' }),
  sugar: z.number().min(0, { message: 'Sugar must be a positive number' }),
  dietaryFiber: z
    .number()
    .min(0, { message: 'Dietary Fiber must be a positive number' }),
  calories: z
    .number()
    .min(0, { message: 'Calories must be a positive number' }),
  unit: z.nativeEnum(EUnit),
});

export type IngredientSchema = z.infer<typeof ingredientSchema>;
