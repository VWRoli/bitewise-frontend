import { ICreateIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import * as api from '@/app/(modules)/dashboard/(pages)/ingredients/api';
import { ACTION_TYPES } from '@/app/common/enums';
import { IActionType } from '@/app/common/interfaces';
import { handleError } from '@/app/common/helpers';

export const handleCreateIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateIngredient,
) => {
  try {
    const { data } = await api.createIngredient(formData);
    dispatch({ type: ACTION_TYPES.CREATE_SUCCESS, payload: data });
  } catch (error) {
    //TODO: roll back state

    handleError(dispatch, ACTION_TYPES.CREATE_ERROR, error);
  }
};

export const handleGetAllIngredients = async (
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

export const handleUpdateIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateIngredient,
  id: number,
) => {
  try {
    const { data } = await api.updateIngredient(id, formData);
    dispatch({ type: ACTION_TYPES.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.UPDATE_ERROR, error);
  }
};

export const handleDeleteIngredient = async (
  dispatch: React.Dispatch<IActionType>,
  id: number,
) => {
  try {
    await api.deleteIngredient(id);
    dispatch({ type: ACTION_TYPES.DELETE_SUCCESS, payload: id });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.DELETE_ERROR, error);
  }
};
