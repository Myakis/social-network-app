import { authAPI, profileAPI } from '../api';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_ERROR_AUTH = 'SET-ERROR-AUTH';
const GET_ICON_AVATAR = 'GET-ICON-AVATAR';
let initialState = {
  isAuth: false,
  userId: null,
  login: null,
  email: null,
  profile: null,
  errorMessage: '',
  iconAvatar: null,
};

//Action Creator

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_ERROR_AUTH:
      return { ...state, errorMessage: action.errorMessage };
    case GET_ICON_AVATAR:
      return { ...state, iconAvatar: action.iconAvatar };
    default:
      return state;
  }
};

//Thunk

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

export const login = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(isAuthorization());
  } else {
    dispatch(setErrorAuth(response.data.messages[0]));
  }
};

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAutnUSerData(null, null, null, false));
  }
};
export default authReducer;
