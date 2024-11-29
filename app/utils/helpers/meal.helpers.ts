import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { IOption } from '@/app/utils/interfaces';

export const convertToOptions = (
  ingredients: IIngredient[] | IMeal[],
): IOption[] => {
  return ingredients.map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name,
  }));
};
