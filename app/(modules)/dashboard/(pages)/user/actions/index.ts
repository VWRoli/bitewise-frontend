import { IAuthActionType, ISignIn } from '@/app/(modules)/(auth)/interfaces';
import * as api from '../api';
import { handleError } from '@/app/common/helpers';
import { AUTH_ACTION_TYPES } from '@/app/(modules)/(auth)/enum';

export const handleLogin = async (
  dispatch: React.Dispatch<IAuthActionType>,
  formData: ISignIn,
) => {
  try {
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN_START });
    const data = await api.login(formData);
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, AUTH_ACTION_TYPES.LOGIN_ERROR, error);
  }
};

export const handleFetchMe = async (
  dispatch: React.Dispatch<IAuthActionType>,
) => {
  try {
    dispatch({ type: AUTH_ACTION_TYPES.FETCH_START });
    const user = await api.getMe();
    dispatch({ type: AUTH_ACTION_TYPES.FETCH_SUCCESS, payload: user });
  } catch (error) {
    handleError(dispatch, AUTH_ACTION_TYPES.FETCH_ERROR, error);
  }
};
