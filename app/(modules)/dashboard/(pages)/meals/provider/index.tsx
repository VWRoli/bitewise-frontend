import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { MealContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { mealReducer } from '@/app/(modules)/dashboard/(pages)/meals/reducer';
import { PropsWithChildren, useReducer } from 'react';

export const MealsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, INITIAL_STATE);

  return (
    <MealContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};
