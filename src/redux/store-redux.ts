import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMeddleware from 'redux-thunk';

import authReducer from './reducer/auth-reducer';
import dialogsReducer from './reducer/dialog-reducer';
import profileReducer from './reducer/profile-reducer';
import userReducer from './reducer/user-reducer';
import initReducer from './reducer/app-reducer';

let rootReducer = combineReducers({
  profile: profileReducer,
  dialog: dialogsReducer,
  users: userReducer,
  auth: authReducer,
  app: initReducer,
});

type AppRootReducer = typeof rootReducer;
export type RootStateType = ReturnType<AppRootReducer>;

//Для работоспособности расширения redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMeddleware)));

export default store;
