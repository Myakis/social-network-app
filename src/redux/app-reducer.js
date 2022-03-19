import { isAuthorization } from './auth-reducer';

const SET_INITIALIZING = 'SET-INITIALIZING';

let initialState = {
  initialized: false,
};

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZING:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSucces = () => ({
  type: SET_INITIALIZING,
});

export const initializeApp = () => dispatch => {
  let promise = dispatch(isAuthorization());
  promise.then(() => {
    dispatch(initializedSucces());
  });
};
export default initReducer;
