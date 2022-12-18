import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMeddleware from 'redux-thunk';

import authReducer from './reducer/auth';
import dialogsReducer from './reducer/dialog';
import profileReducer from './reducer/profile';
import userReducer from './reducer/user';
import initReducer from './reducer/app-reducer';
import chatReducer from './reducer/chat';

let rootReducer = combineReducers({
  profile: profileReducer,
  dialog: dialogsReducer,
  users: userReducer,
  auth: authReducer,
  app: initReducer,
  chat: chatReducer,
});

type AppRootReducer = typeof rootReducer;
export type RootStateType = ReturnType<AppRootReducer>;

//Для работоспособности расширения redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMeddleware)));

export default store;
