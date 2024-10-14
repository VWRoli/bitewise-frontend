import { API_URL } from '@/app/common/config';
import axios from '@/app/common/lib/axios';
import { ICreateIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';

const API = axios.create({ baseURL: API_URL });

export const createIngredient = (data: ICreateIngredient) =>
  API.post('/ingredient', data);

export const getAllIngredients = (userId: number) =>
  API.get(`/ingredient/${userId}`);

export const updateIngredient = (id: number, data: ICreateIngredient) =>
  API.patch(`/ingredient/${id}`, data);

export const deleteIngredient = (id: number) => API.delete(`/ingredient/${id}`);
