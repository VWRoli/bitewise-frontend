import { AUTH_ACTION_TYPES } from '@/app/(modules)/(auth)/enum';
import { IAuthActionType } from '@/app/(modules)/(auth)/interfaces';
import { INITIAL_STATE } from '@/app/(modules)/dashboard/(pages)/user/constants';
import { IUserState } from '@/app/(modules)/dashboard/(pages)/user/interfaces';

export const userReducer = (
  state = INITIAL_STATE,
  action: IAuthActionType,
): IUserState => {
  switch (action.type) {
    // Logging in a user
    case AUTH_ACTION_TYPES.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case AUTH_ACTION_TYPES.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // Registering a user
    case AUTH_ACTION_TYPES.REGISTER_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case AUTH_ACTION_TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case AUTH_ACTION_TYPES.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //Fetch me
    case AUTH_ACTION_TYPES.FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case AUTH_ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case AUTH_ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
