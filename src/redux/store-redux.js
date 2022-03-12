import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialog-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialog: dialogsReducer,
});

let store = createStore(reducers);
export default store;
