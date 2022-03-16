import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';
import thunkMeddleware from 'redux-thunk';
let reducers = combineReducers({
  profile: profileReducer,
  dialog: dialogsReducer,
  users: userReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMeddleware));
export default store;
