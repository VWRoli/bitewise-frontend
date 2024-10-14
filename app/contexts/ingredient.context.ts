import { INITIAL_STATE } from '@/app/dashboard/(pages)/ingredients/constants';
import { IIngredientState } from '@/app/dashboard/(pages)/ingredients/interfaces';
import { IActionType } from '@/app/reducers';
import React, { useContext } from 'react';

interface ValueTypes {
  state: IIngredientState;
  dispatch: React.Dispatch<IActionType>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
};

export const IngredientContext = React.createContext(defaultValue);

export const useBudgetsContext = () => {
  return useContext(IngredientContext);
};
