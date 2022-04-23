import { authAPI, profileAPI, securityAPI } from '../../api';
import { ProfileType } from '../../types/reducers-types';

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

const authReducer = (state = initialState, action: any): InitialStateType => {
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
interface SetAuthUSerPayloadActionTypes {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  errorMessage: string;
}

interface SetAuthUSerDataActionTypes {
  type: typeof SET_USER_DATA;
  payload: SetAuthUSerPayloadActionTypes;
}
//Action Creator
export const setAutnUSerData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  errorMessage: string = '',
): SetAuthUSerDataActionTypes => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth, errorMessage },
});

interface SetErrorAuthActionTypes {
  type: typeof SET_ERROR_AUTH;
  errorMessage: string;
}
export const setErrorAuth = (errorMessage: string): SetErrorAuthActionTypes => ({
  type: SET_ERROR_AUTH,
  errorMessage,
});

interface GetIconAvatarActionTypes {
  type: typeof GET_ICON_AVATAR;
  iconAvatar: string;
}
export const getIconAvatar = (iconAvatar: string): GetIconAvatarActionTypes => ({
  type: GET_ICON_AVATAR,
  iconAvatar,
});

interface SetCaptchaUrlActionTypes {
  type: typeof SET_CAPTCHA_URL;
  payload: {
    captchaUrl: string;
  };
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionTypes => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});

interface SetLoginActionTypes {
  type: typeof SET_LOGIN;
  login: string;
}
export const setLogin = (login: string): SetLoginActionTypes => ({
  type: SET_LOGIN,
  login,
});

//Thunk
export const isAuthorization = () => (dispatch: any) => {
  return authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAutnUSerData(id, login, email, true));
      profileAPI.getProfile(id).then(response => {
        dispatch(getIconAvatar(response.data.photos.small));
      });
    }
  });
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any = null) =>
  async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(isAuthorization());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptha());
      }
      dispatch(setErrorAuth(response.data.messages[0]));
    }
  };

export const getCaptha = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptha();
  dispatch(setCaptchaUrl(response.data.url));
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAutnUSerData(null, null, null, false));
  }
};
export default authReducer;
