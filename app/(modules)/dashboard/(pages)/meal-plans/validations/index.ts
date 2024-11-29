import { z } from 'zod';

export const mealPlanSchema = z.object({
  name: z.string().min(1, 'Name is required'),
});

export type MealPlanSchema = z.infer<typeof mealPlanSchema>;
