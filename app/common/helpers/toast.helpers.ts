import { toaster } from '@/app/common/components/CustomToast';
import { EActionType } from '@/app/common/enums';

export const createOrUpdateToasts = (action: EActionType, result: any) => {
  const actionStr = action === EActionType.UPDATE ? 'Updated' : 'Added';

  if (result.error) {
    toaster.error({
      text: result.error,
    });
    return;
  } else {
    toaster.success({
      text: `${actionStr} successfully!`,
    });
  }
};
