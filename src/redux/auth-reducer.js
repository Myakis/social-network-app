import { authAPI, userAPI } from '../api';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
let initialState = {
  isAuth: false,
  userId: null,
  login: null,
  email: null,
  profile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const setAutnUSerData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

export const isAuthorization = () => {
  return dispatch => {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAutnUSerData(id, login, email, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(isAuthorization());
      } else {
        console.log(response.data.messages[0]);
      }
    });
  };
};
export const logout = () => {
  return dispatch => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAutnUSerData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
