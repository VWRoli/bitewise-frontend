import { toast } from '@/app/hooks/use-toast';

export const getErrorMessage = async (res: Response): Promise<string> => {
  let errorMessage = `${res.status} ${res.statusText}`;

  try {
    const errorResponse = await res.json();

    if (errorResponse?.message) {
      if (Array.isArray(errorResponse.message)) {
        errorMessage = errorResponse.message.join(', ');
      } else if (typeof errorResponse.message === 'string') {
        errorMessage = errorResponse.message;
      }
    } else if (errorResponse?.error) {
      errorMessage = errorResponse.error;
    }
  } catch (jsonError) {
    console.error(jsonError);
  }
  return errorMessage;
};

export const handleError = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }
  toast({
    variant: 'error',
    description: message,
  });
};
