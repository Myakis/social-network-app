const SET_USER_DATA = 'SET-USER-DATA';

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
      return { ...state, ...action.data, isAuth: true };

    default:
      return state;
  }
};

export const setAutnUSerData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });

export default authReducer;
