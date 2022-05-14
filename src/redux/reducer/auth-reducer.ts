import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { authAPI, profileAPI, securityAPI } from '../../api/api';
import { ResultCodeEnum } from '../../types/api-types';
import { ActionsTypes, ProfileType } from '../../types/reducers-types';
import { RootStateType } from '../store-redux';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_ERROR_AUTH = 'SET-ERROR-AUTH';
const GET_ICON_AVATAR = 'GET-ICON-AVATAR';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {
  isAuth: false as boolean | null,
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  profile: null as ProfileType | null,
  errorMessage: '',
  iconAvatar: null as string | null,
  captchaUrl: null as string | null,
  userName: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL:
      return { ...state, ...action.payload };
    case SET_ERROR_AUTH:
      return { ...state, errorMessage: action.errorMessage };
    case GET_ICON_AVATAR:
      return { ...state, iconAvatar: action.iconAvatar };
    case SET_LOGIN:
      return { ...state, userName: action.login };
    default:
      return state;
  }
};

//Action Creator
export const actions = {
  setAuthUSerData: (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    errorMessage: string = '',
  ) =>
    ({
      type: SET_USER_DATA,
      payload: { userId, login, email, isAuth, errorMessage },
    } as const),
  setErrorAuth: (errorMessage: string) =>
    ({
      type: SET_ERROR_AUTH,
      errorMessage,
    } as const),
  getIconAvatar: (iconAvatar: string | null) =>
    ({
      type: GET_ICON_AVATAR,
      iconAvatar,
    } as const),
  setCaptchaUrl: (captchaUrl: string) =>
    ({
      type: SET_CAPTCHA_URL,
      payload: { captchaUrl },
    } as const),

  setLogin: (login: string) =>
    ({
      type: SET_LOGIN,
      login,
    } as const),
};

type ThunkState = ThunkAction<void, RootStateType, unknown, AnyAction>;

//Thunk
export const isAuthorization = (): ThunkState => dispatch =>
  authAPI.me().then(response => {
    if (response.data.resultCode === ResultCodeEnum.success) {
      let { id, login, email } = response.data.data;
      dispatch(actions.setAuthUSerData(id, login, email, true));
      profileAPI.getProfile(id).then(response => {
        dispatch(actions.getIconAvatar(response.data.photos.small));
      });
    }
  });

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any = null): ThunkState =>
  async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(isAuthorization());
    } else {
      if (response.data.resultCode === ResultCodeEnum.captcha) {
        dispatch(getCaptcha());
      }
      dispatch(actions.setErrorAuth(response.data.messages[0]));
    }
  };

export const getCaptcha = (): ThunkState => async dispatch => {
  const response = await securityAPI.getCaptcha();
  dispatch(actions.setCaptchaUrl(response.data.url));
};

export const logout = (): ThunkState => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUSerData(null, null, null, false));
  }
};
export default authReducer;
