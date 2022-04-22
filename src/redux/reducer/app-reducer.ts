import { isAuthorization } from './auth-reducer.ts';

const SET_INITIALIZING = 'SET-INITIALIZING';

export interface InitialStateType {
  initialized: boolean;
}

let initialState: InitialStateType = {
  initialized: false,
};

const initReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZING:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

interface InitializedSuccessActionType {
  type: typeof SET_INITIALIZING;
}

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: SET_INITIALIZING,
});

//thunk
export const initializeApp = () => async (dispatch: any) => {
  let promise = await dispatch(isAuthorization());

  dispatch(initializedSuccess());
};
export default initReducer;
