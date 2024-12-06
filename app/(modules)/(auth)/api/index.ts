'client-only';

import axios from 'axios';

import { ISignIn, ISignUp } from '@/app/(modules)/(auth)/interfaces';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import axiosInstance from '@/app/lib/axios';
import { API_URL } from '@/app/utils/config';
import { handleAxiosError } from '@/app/utils/helpers/api.client.helpers';

export const login = async (userData: ISignIn): Promise<IUser> => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/auth/signin`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data as IUser;
  } catch (error) {
    return handleAxiosError(error, 'Login failed');
  }
};

export const register = async (userData: ISignUp) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/auth/signup`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data as IUser;
  } catch (error) {
    return handleAxiosError(error, 'Registration failed');
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`/api/logout`);

    if (response.status !== 200) {
      const message = `Error: ${response.data.message} (Status code: ${response.status})`;

      throw new Error(message);
    }
  } catch (error) {
    return handleAxiosError(error, 'Logout failed');
  }
};
