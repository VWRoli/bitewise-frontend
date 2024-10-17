import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/user/constants';
import { UserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { userReducer } from '@/app/(modules)/dashboard/(pages)/user/reducer';
import { PropsWithChildren, useReducer, useEffect } from 'react';
import { handleFetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { usePathname } from 'next/navigation';
import { AUTH_ACTION_TYPES } from '@/app/(modules)/(auth)/enum';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      dispatch({ type: AUTH_ACTION_TYPES.FETCH_ERROR });
      return;
    }
    handleFetchMe(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
