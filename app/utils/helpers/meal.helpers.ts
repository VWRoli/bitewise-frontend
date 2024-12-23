import { IIngredient } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/interfaces';
import { IMeal } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';
import { IOption } from '@/app/utils/interfaces';

export const convertToOptions = (
  ingredients: IIngredient[] | IMeal[],
): IOption[] => {
  return ingredients.map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name,
  }));
};
