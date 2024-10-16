import { ICreateMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import * as api from '@/app/(modules)/dashboard/(pages)/meals/api';
import { ACTION_TYPES } from '@/app/common/enums';
import { IActionType } from '@/app/common/interfaces';
import { handleError } from '@/app/common/helpers';

export const handleCreateMeal = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateMeal,
) => {
  try {
    const { data } = await api.createMeal(formData);
    dispatch({ type: ACTION_TYPES.CREATE_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.CREATE_ERROR, error);
  }
};

export const handleGetAllMeals = async (
  dispatch: React.Dispatch<IActionType>,
  userId: number,
) => {
  try {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    const { data } = await api.getAllMeals(userId);
    dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.FETCH_ERROR, error);
  }
};

export const handleUpdateMeal = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateMeal,
  id: number,
) => {
  try {
    const { data } = await api.updateMeal(id, formData);
    dispatch({ type: ACTION_TYPES.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.UPDATE_ERROR, error);
  }
};

export const handleDeleteMeal = async (
  dispatch: React.Dispatch<IActionType>,
  id: number,
) => {
  try {
    await api.deleteMeal(id);
    dispatch({ type: ACTION_TYPES.DELETE_SUCCESS, payload: id });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.DELETE_ERROR, error);
  }
};
