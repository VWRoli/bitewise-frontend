import { ACTION_TYPES } from '@/app/dashboard/(pages)/ingredients/enums';
import { ICreateIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';
import { IActionType } from '@/app/reducers';
import * as api from '@/app/dashboard/(pages)/ingredients/api';

export const createIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateIngredient,
) => {
  try {
    dispatch({ type: ACTION_TYPES.CREATE_START });
    const { data } = await api.createIngredient(formData);
    dispatch({ type: ACTION_TYPES.CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.CREATE_ERROR });
  }
};

export const getAllIngredients = async (
  dispatch: React.Dispatch<IActionType>,
  userId: number,
) => {
  try {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    const { data } = await api.getAllIngredients(userId);
    dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_ERROR });
  }
};

export const updateIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateIngredient,
  id: number,
) => {
  try {
    dispatch({ type: ACTION_TYPES.UPDATE_START });
    const { data } = await api.updateIngredient(id, formData);
    dispatch({ type: ACTION_TYPES.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.UPDATE_ERROR });
  }
};

export const deleteIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  id: number,
) => {
  try {
    dispatch({ type: ACTION_TYPES.DELETE_START });
    await api.deleteIngredient(id);
    dispatch({ type: ACTION_TYPES.DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.DELETE_ERROR });
  }
};
