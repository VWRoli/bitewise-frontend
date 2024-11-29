import { toast } from '@/app/hooks/use-toast';
import { EActionType } from '@/app/utils/enums';

export const createOrUpdateToasts = (action: EActionType, result: any) => {
  const actionStr = action === EActionType.UPDATE ? 'Updated' : 'Added';

  if (result.error) {
    toast({
      variant: 'error',
      description: result.error,
    });
    return;
  } else {
    toast({
      variant: 'success',
      description: `${actionStr} successfully!`,
    });
  }
};
