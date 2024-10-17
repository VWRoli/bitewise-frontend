import {
  IMealActionType,
  IMealState,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import React, { useContext } from 'react';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meals/constants';

interface ValueTypes {
  state: IMealState;
  dispatch: React.Dispatch<IMealActionType>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
};

export const MealContext = React.createContext(defaultValue);

export const useMealsContext = () => {
  return useContext(MealContext);
};
