import { handleGetAllMealPlans } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/meal-plans/constants';
import { MealPlanContext } from '@/app/(modules)/dashboard/(pages)/meal-plans/context';
import { mealPlanReducer } from '@/app/(modules)/dashboard/(pages)/meal-plans/reducer';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect, useReducer } from 'react';

export const MealPlansProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { state: userState } = useUserContext();
  const userId = userState.user?.id;
  const pathname = usePathname();
  const [state, dispatch] = useReducer(mealPlanReducer, INITIAL_STATE);

  useEffect(() => {
    if (pathname === '/') return;

    if (userId) {
      handleGetAllMealPlans(dispatch, userId);
    }
  }, [userId]);

  return (
    <MealPlanContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MealPlanContext.Provider>
  );
};
