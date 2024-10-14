import { IngredientContext } from '@/app/contexts';
import { INITIAL_STATE } from '@/app/dashboard/(pages)/ingredients/constants';
import { ingredientReducer } from '@/app/reducers';
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
