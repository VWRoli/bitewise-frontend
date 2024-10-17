import { handleGetAllMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { MealContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { mealReducer } from '@/app/(modules)/dashboard/(pages)/meals/reducer';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect, useReducer } from 'react';

export const MealsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { state: userState } = useUserContext();

  const userId = userState.user?.id;

  const pathname = usePathname();
  const [state, dispatch] = useReducer(mealReducer, INITIAL_STATE);

  useEffect(() => {
    if (pathname === '/') return;

    if (userId) {
      handleGetAllMeals(dispatch, userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

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
