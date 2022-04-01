import { authAPI, profileAPI, securityAPI } from '../api';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_ERROR_AUTH = 'SET-ERROR-AUTH';
const GET_ICON_AVATAR = 'GET-ICON-AVATAR';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';
let initialState = {
  isAuth: false,
  userId: null,
  login: null,
  email: null,
  profile: null,
  errorMessage: '',
  iconAvatar: null,
  captchaUrl: null,
  userName: null,
};

const authReducer = (state = initialState, action) => {
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
export const setAutnUSerData = (userId, login, email, isAuth, errorMessage = '') => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth, errorMessage },
});

export const setErrorAuth = errorMessage => ({
  type: SET_ERROR_AUTH,
  errorMessage,
});
export const getIconAvatar = iconAvatar => ({
  type: GET_ICON_AVATAR,
  iconAvatar,
});
export const setCaptchaUrl = captchaUrl => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});
export const setLogin = login => ({
  type: SET_LOGIN,
  login,
});

//Thunk
export const isAuthorization = () => dispatch => {
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
  (email, password, rememberMe, captcha = null) =>
  async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    debugger;
    if (response.data.resultCode === 0) {
      dispatch(isAuthorization());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptha());
      }
      dispatch(setErrorAuth(response.data.messages[0]));
    }
  };
export const getCaptha = () => async dispatch => {
  const response = await securityAPI.getCaptha();
  dispatch(setCaptchaUrl(response.data.url));
};

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAutnUSerData(null, null, null, false));
  }
};
export default authReducer;
