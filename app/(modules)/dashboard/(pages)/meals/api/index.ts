import { API_URL } from '@/app/common/config';
import axios from '@/app/common/lib/axios';
import { ICreateMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

const API = axios.create({ baseURL: API_URL });

export const createMeal = (data: ICreateMeal) => API.post('/meal', data);

export const getAllMeals = (userId: number) => API.get(`/meal/${userId}`);

export const updateMeal = (id: number, data: ICreateMeal) =>
  API.patch(`/meal/${id}`, data);

export const deleteMeal = (id: number) => API.delete(`/meal/${id}`);
