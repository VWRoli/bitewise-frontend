import { handleGetAllIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { IngredientContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { ingredientReducer } from '@/app/(modules)/dashboard/(pages)/ingredients/reducer';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect, useReducer } from 'react';

export const IngredientsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { state: userState } = useUserContext();

  const userId = userState.user?.id;

  const pathname = usePathname();
  const [state, dispatch] = useReducer(ingredientReducer, INITIAL_STATE);

  useEffect(() => {
    if (pathname === '/') return;
    if (userId) {
      handleGetAllIngredients(dispatch, userId);
    }
  }, [userId]);

  return (
    <IngredientContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};
