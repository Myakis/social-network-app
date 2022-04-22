import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMeddleware from 'redux-thunk';

import authReducer from './reducer/auth-reducer.ts';
import dialogsReducer from './reducer/dialog-reducer.ts';
import profileReducer from './reducer/profile-reducer.ts';
import userReducer from './reducer/user-reducer.ts';
import initReducer from './reducer/app-reducer.ts';
let reducers = combineReducers({
  profile: profileReducer,
  dialog: dialogsReducer,
  users: userReducer,
  auth: authReducer,
  app: initReducer,
});

//Для работоспособности расширения redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMeddleware)));

export default store;
