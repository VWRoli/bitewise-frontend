import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { toaster } from '@/app/common/components/CustomToast';

export const sendToasts = (
  values: IIngredient | null | undefined,
  result: any,
) => {
  if (result.error) {
    toaster.error({
      text: result.error,
    });
    return;
  } else {
    toaster.success({
      text: `Ingredient successfully ${values ? 'updated' : 'added'}!`,
    });
  }
};
