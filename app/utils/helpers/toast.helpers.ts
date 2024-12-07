import { EActionType } from '@/app/utils/enums';
import { toast } from '@/app/hooks/use-toast';

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
