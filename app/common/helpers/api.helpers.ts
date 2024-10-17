import { AUTH_ACTION_TYPES } from '@/app/(modules)/(auth)/enum';
import { toaster } from '@/app/common/components/CustomToast';
import { ACTION_TYPES } from '@/app/common/enums';
import { AxiosError } from 'axios';

export const handleError = <T>(
  dispatch: React.Dispatch<T>,
  actionType: ACTION_TYPES | AUTH_ACTION_TYPES,
  error: unknown,
) => {
  dispatch({ type: actionType } as T);

  if (error instanceof AxiosError && error.response) {
    toaster.error({
      text: `${error.response.data.statusCode} ${error.response.data.message}`,
    });
  } else if (error instanceof Error) {
    toaster.error({
      text: error.message || 'An unexpected error occurred',
    });
  } else {
    toaster.error({
      text: 'An unexpected error occurred',
    });
  }
};
