import { ISignIn, ISignUp } from '@/app/(modules)/(auth)/interfaces';
import { API_URL } from '@/utils/config';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import axios from 'axios';
import { toaster } from '@/app/common/components/CustomToast';

export const login = async (userData: ISignIn): Promise<IUser> => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return response.data as IUser;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed.');
    } else {
      throw new Error('Login failed.');
    }
  }
};

export const register = async (userData: ISignUp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return response.data as IUser;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Registration failed.');
    } else {
      throw new Error('Registration failed.');
    }
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`/api/logout`, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      const message = `Error: ${response.data.message} (Status code: ${response.status})`;
      toaster.error({
        text: message,
      });
      throw new Error(message);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Logout failed.');
    } else {
      throw new Error('Logout failed.');
    }
  }
};
