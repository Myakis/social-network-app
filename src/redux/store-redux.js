import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMeddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogsReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';
import initReducer from './app-reducer';
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
