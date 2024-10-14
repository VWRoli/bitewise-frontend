import { ICreateIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';
import * as api from '@/app/dashboard/(pages)/ingredients/api';
import { toaster } from '@/app/common/components/CustomToast';
import { AxiosError } from 'axios';
import { ACTION_TYPES } from '@/app/common/enums';
import { IActionType } from '@/app/common/interfaces';

export const handleCreateIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateIngredient,
) => {
  try {
    dispatch({ type: ACTION_TYPES.CREATE_START });
    const { data } = await api.createIngredient(formData);
    dispatch({ type: ACTION_TYPES.CREATE_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.CREATE_ERROR, error);
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
    handleError(dispatch, ACTION_TYPES.FETCH_ERROR, error);
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
    handleError(dispatch, ACTION_TYPES.UPDATE_ERROR, error);
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
    handleError(dispatch, ACTION_TYPES.DELETE_ERROR, error);
  }
};

const handleError = (
  dispatch: React.Dispatch<IActionType>,
  actionType: ACTION_TYPES,
  error: unknown,
) => {
  dispatch({ type: actionType });

  if (error instanceof AxiosError && error.response) {
    toaster.error({
      text: `${error.response.data.statusCode} ${error.response.data.message}`,
    });
  } else {
    toaster.error({
      text: 'An unexpected error occurred',
    });
  }
};
