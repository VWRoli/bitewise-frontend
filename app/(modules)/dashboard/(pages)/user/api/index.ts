import { API_URL } from '@/app/common/config';
import { IUser } from '@/app/(modules)/dashboard/(pages)/user/interfaces';
import axios from 'axios';

export const getMe = async (): Promise<IUser> => {
  try {
    const response = await axios.get(`${API_URL}/users/me`, {
      withCredentials: true,
    });

    return response.data as IUser;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Get user failed.');
    } else {
      throw new Error('Get user failed.');
    }
  }
};
