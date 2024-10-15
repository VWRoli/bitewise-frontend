import { INITIAL_STATE } from '@/app/dashboard/(pages)/user/constants';
import { UserContext } from '@/app/dashboard/(pages)/user/context';
import { userReducer } from '@/app/dashboard/(pages)/user/reducer';
import { PropsWithChildren, useReducer, useEffect } from 'react';
import { handleFetchMe } from '@/app/dashboard/(pages)/user/actions';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    handleFetchMe(dispatch);
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
