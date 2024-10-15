import { ISignIn, ISignUp } from '@/app/(auth)/interfaces';
import { toaster } from '@/app/common/components/CustomToast';
import { API_URL } from '@/app/common/config';
import { IUser } from '@/app/dashboard/(pages)/user/interfaces';

export const register = async (userData: ISignUp) => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

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

export const logout = async () => {
  try {
    const response = await fetch(`/api/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

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
