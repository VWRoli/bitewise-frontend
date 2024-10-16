import { AUTH_ACTION_TYPES } from '@/app/(modules)/(auth)/enum';
import {
  IAuthActionType,
  ISignIn,
  ISignUp,
} from '@/app/(modules)/(auth)/interfaces';
import * as api from '../api';
import { handleError } from '@/app/common/helpers';

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

export const handleRegister = async (
  dispatch: React.Dispatch<IAuthActionType>,
  formData: ISignUp,
) => {
  try {
    dispatch({ type: AUTH_ACTION_TYPES.REGISTER_START });
    const data = await api.register(formData);
    dispatch({ type: AUTH_ACTION_TYPES.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    handleError(dispatch, AUTH_ACTION_TYPES.REGISTER_ERROR, error);
  }
};
