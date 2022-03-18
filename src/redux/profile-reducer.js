import { profileAPI, userAPI } from '../api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const DELETE_USER_PROFILE = 'DELETE-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
// const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
  post: [
    { id: 1, message: 'Какое-то сообщение, которое потом будет написано мной для теста ', likeCount: 23, shareCount: 1 },
    { id: 2, message: 'Какое-то сообщение, которое потом будет написано мной для теста 22', likeCount: 223, shareCount: 21 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      //Добавление постов в bll и рендер страницы
      if (action.text) {
        let newPost = {
          id: 6,
          message: action.text,
          likeCount: 0,
          shareCount: 0,
        };
        return { ...state, post: [...state.post, newPost] };
      }
      return state;

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case DELETE_USER_PROFILE:
      return { ...state, profile: null };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};
export const addPost = text => ({ type: ADD_POST, text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const deleteUserProfile = () => ({ type: SET_USER_PROFILE });
export const setStatus = status => ({ type: SET_STATUS, status });
// export const updateStatus = status => ({ type: UPDATE_STATUS, status });

export const getProfile = id => {
  return dispatch => {
    userAPI.getProfile(id).then(response => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatus = id => {
  return dispatch => {
    profileAPI.getStatus(id).then(response => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateUserStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
