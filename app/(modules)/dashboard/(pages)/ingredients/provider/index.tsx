import { handleGetAllIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { IngredientContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { ingredientReducer } from '@/app/(modules)/dashboard/(pages)/ingredients/reducer';
import { PropsWithChildren, useEffect, useReducer } from 'react';

export const IngredientsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ingredientReducer, INITIAL_STATE);

  useEffect(() => {
    handleGetAllIngredients(dispatch, 1);
  }, []);

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
