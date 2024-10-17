import { API_URL } from '@/app/common/config';
import axios from '@/app/common/lib/axios';
import { ICreateMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';

const API = axios.create({ baseURL: API_URL });

export const createMealPlan = (data: ICreateMealPlan) =>
  API.post('/meal-plan', data);

export const getAllMealPlans = (userId: number) =>
  API.get(`/meal-plan/all/${userId}`);

export const updateMealPlan = (id: number, data: ICreateMealPlan) =>
  API.patch(`/meal-plan/${id}`, data);

export const deleteMealPlan = (id: number) => API.delete(`/meal-plan/${id}`);
