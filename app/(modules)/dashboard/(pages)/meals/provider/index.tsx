import { handleGetAllMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { MealContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { mealReducer } from '@/app/(modules)/dashboard/(pages)/meals/reducer';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect, useReducer } from 'react';

export const MealsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [state, dispatch] = useReducer(mealReducer, INITIAL_STATE);

  useEffect(() => {
    if (pathname === '/') return;
    handleGetAllMeals(dispatch, 1);
  }, []);

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
