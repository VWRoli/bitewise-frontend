import { IMealState } from '@/app/dashboard/(pages)/meals/interfaces';
import { IActionType } from '@/app/common/interfaces';
import React, { useContext } from 'react';
import { INITIAL_STATE } from '@/app/dashboard/(pages)/meals/constants';

interface ValueTypes {
  state: IMealState;
  dispatch: React.Dispatch<IActionType>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
};

export const MealContext = React.createContext(defaultValue);

export const useMealsContext = () => {
  return useContext(MealContext);
};
