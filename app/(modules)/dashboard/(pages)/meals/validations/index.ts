import { z } from 'zod';

const mealIngredientSchema = z.object({
  ingredientId: z.number().int().positive(),
  quantity: z.number().positive(),
});

export const mealSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  mealIngredients: z
    .array(mealIngredientSchema)
    .min(1, 'At least one ingredient is required'),
});

export type MealSchema = z.infer<typeof mealSchema>;
