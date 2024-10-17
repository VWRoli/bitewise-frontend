import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meal-plans/constants';
import { IMealPlanState } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { IActionType } from '@/app/common/interfaces';
import React, { useContext } from 'react';

interface ValueTypes {
  state: IMealPlanState;
  dispatch: React.Dispatch<IActionType>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
};

export const MealPlanContext = React.createContext(defaultValue);

export const useMealPlansContext = () => {
  return useContext(MealPlanContext);
};
