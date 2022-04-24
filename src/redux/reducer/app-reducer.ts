import { ActionsTypes } from './../../types/reducers-types';
import { isAuthorization } from './auth-reducer';

const SET_INITIALIZING = 'SET-INITIALIZING';

export interface InitialStateType {
  initialized: boolean;
}

let initialState: InitialStateType = {
  initialized: false,
};

const initReducer = (
  state = initialState,
  action: ActionsTypes<typeof AuthActions>,
): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZING:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const AuthActions = {
  initializedSuccess: () =>
    ({
      type: SET_INITIALIZING,
    } as const),
};

//thunk
export const initializeApp = () => async (dispatch: any) => {
  let promise = await dispatch(isAuthorization());

  dispatch(AuthActions.initializedSuccess());
};
export default initReducer;
