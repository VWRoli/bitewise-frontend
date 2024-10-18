import { ICreateMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import * as api from '@/app/(modules)/dashboard/(pages)/meal-plans/api';
import { handleError } from '@/app/common/helpers';
import { IActionType } from '@/app/common/interfaces';
import { ACTION_TYPES } from '@/app/common/enums';

export const handleCreateMealPlan = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateMealPlan,
) => {
  try {
    const { data } = await api.createMealPlan(formData);
    dispatch({
      type: ACTION_TYPES.CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.CREATE_ERROR, error);
  }
};

export const handleGetAllMealPlans = async (
  dispatch: React.Dispatch<IActionType>,
  userId: number,
) => {
  try {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    const { data } = await api.getAllMealPlans(userId);
    dispatch({
      type: ACTION_TYPES.FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.FETCH_ERROR, error);
  }
};

export const handleUpdateMealPlan = async (
  dispatch: React.Dispatch<IActionType>,
  formData: ICreateMealPlan,
  id: number,
) => {
  try {
    const { data } = await api.updateMealPlan(id, formData);
    dispatch({
      type: ACTION_TYPES.UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.UPDATE_ERROR, error);
  }
};

export const handleDeleteMealPlan = async (
  dispatch: React.Dispatch<IActionType>,
  id: number,
) => {
  try {
    await api.deleteMealPlan(id);
    dispatch({
      type: ACTION_TYPES.DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    handleError(dispatch, ACTION_TYPES.DELETE_ERROR, error);
  }
};
