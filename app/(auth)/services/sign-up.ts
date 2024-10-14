import { ISignIn, ISignUp, IUser } from '@/app/(auth)/interfaces';
import { toaster } from '@/app/common/components/CustomToast';
import { API_URL } from '@/app/common/config';

export const register = async (userData: ISignUp) => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    //TODO: update to receive user object
    if (!response.ok) {
      const responseData = await response.json();

      const message = `Error: ${responseData.message} (Status code: ${responseData.statusCode})`;
      toaster.error({
        text: message,
      });
      throw new Error(message);
    }
  } catch (error: any) {
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

export const login = async (userData: ISignIn): Promise<IUser> => {
  try {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      throw new Error(responseData.message || 'Login failed.');
    }

    return responseData as IUser;
  } catch (error: any) {
    throw error;
  }
};
