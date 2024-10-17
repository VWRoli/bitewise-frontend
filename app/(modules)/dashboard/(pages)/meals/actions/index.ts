import {
  ICreateMeal,
  IMeal,
  IMealActionType,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import * as api from '@/app/(modules)/dashboard/(pages)/meals/api';
import { handleError } from '@/app/common/helpers';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { enrichMealIngredients } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { EXTENDED_MEAL_ACTION_TYPES } from '@/app/(modules)/dashboard/(pages)/meals/enums';

export const handleCreateMeal = async (
  dispatch: React.Dispatch<IMealActionType>,
  formData: ICreateMeal,
) => {
  try {
    const { data } = await api.createMeal(formData);
    dispatch({
      type: EXTENDED_MEAL_ACTION_TYPES.CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, EXTENDED_MEAL_ACTION_TYPES.CREATE_ERROR, error);
  }
};

export const handleGetAllMeals = async (
  dispatch: React.Dispatch<IMealActionType>,
  userId: number,
): Promise<IMeal[]> => {
  try {
    dispatch({ type: EXTENDED_MEAL_ACTION_TYPES.FETCH_START });
    const { data }: { data: IMeal[] } = await api.getAllMeals(userId);

    dispatch({ type: EXTENDED_MEAL_ACTION_TYPES.FETCH_SUCCESS, payload: data });
    return data;
  } catch (error) {
    handleError(dispatch, EXTENDED_MEAL_ACTION_TYPES.FETCH_ERROR, error);
    return [];
  }
};

export const handleUpdateMeal = async (
  dispatch: React.Dispatch<IMealActionType>,
  formData: ICreateMeal,
  id: number,
) => {
  try {
    const { data } = await api.updateMeal(id, formData);
    dispatch({
      type: EXTENDED_MEAL_ACTION_TYPES.UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, EXTENDED_MEAL_ACTION_TYPES.UPDATE_ERROR, error);
  }
};

export const handleDeleteMeal = async (
  dispatch: React.Dispatch<IMealActionType>,
  id: number,
) => {
  try {
    await api.deleteMeal(id);
    dispatch({ type: EXTENDED_MEAL_ACTION_TYPES.DELETE_SUCCESS, payload: id });
  } catch (error) {
    handleError(dispatch, EXTENDED_MEAL_ACTION_TYPES.DELETE_ERROR, error);
  }
};

export const handleEnrichMealsWithIngredients = (
  dispatch: React.Dispatch<IMealActionType>,
  meals: IMeal[],
  ingredients: IIngredient[],
) => {
  console.log('am i running unnecessarily?');
  const enrichedMeals: IMeal[] = meals.map((meal) =>
    enrichMealIngredients(meal, ingredients),
  );

  dispatch({
    type: EXTENDED_MEAL_ACTION_TYPES.ENRICH_SUCCESS,
    payload: enrichedMeals,
  });
};
