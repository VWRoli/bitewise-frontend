import { ISignIn } from '@/app/(auth)/interfaces';
import { API_URL } from '@/app/common/config';
import { IUser } from '@/app/dashboard/(pages)/user/interfaces';
import axios from 'axios';

export const login = async (userData: ISignIn): Promise<IUser> => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return response.data as IUser;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed.');
    } else {
      throw new Error('Login failed.');
    }
  }
};

export const getMe = async (): Promise<IUser> => {
  try {
    const response = await axios.get(`${API_URL}/users/me`, {
      withCredentials: true,
    });

    return response.data as IUser;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Get user failed.');
    } else {
      throw new Error('Get user failed.');
    }
  }
};
