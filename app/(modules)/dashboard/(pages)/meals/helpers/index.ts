import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { IOption } from '@/app/common/interfaces';

export const convertToOptions = (ingredients: IIngredient[]): IOption[] => {
  return ingredients.map((ingredient) => ({
    id: ingredient.id,
    label: ingredient.name,
  }));
};
