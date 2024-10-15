import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { IngredientContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { ingredientReducer } from '@/app/(modules)/dashboard/(pages)/ingredients/reducer';
import { PropsWithChildren, useReducer } from 'react';

export const IngredientsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ingredientReducer, INITIAL_STATE);

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
