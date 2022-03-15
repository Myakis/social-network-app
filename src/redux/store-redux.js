import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialog: dialogsReducer,
  users: userReducer,
});

let store = createStore(reducers);
export default store;
