import { ActionsTypes, ThunkType } from './../../types/reducers-types';
import { isAuthorization } from './auth';

const SET_INITIALIZING = 'SET_INITIALIZING';

let initialState = {
  initialized: false,
};
type InitialStateType = typeof initialState;

const initReducer = (
  state = initialState,
  action: ActionsTypes<typeof AppActions>,
): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZING:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const AppActions = {
  initializedSuccess: () =>
    ({
      type: SET_INITIALIZING,
    } as const),
};

//thunk
export const initializeApp = (): ThunkType => async dispatch => {
  await dispatch(isAuthorization());
  dispatch(AppActions.initializedSuccess());
};
export default initReducer;
