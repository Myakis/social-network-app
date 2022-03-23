import { profileAPI, userAPI } from '../api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const DELETE_USER_PROFILE = 'DELETE-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES';
const LOAD_PHOTO_SUCCES = 'LOAD-PHOTO-SUCCES';
// const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
  post: [
    {
      id: 1,
      message: 'Какое-то сообщение, которое потом будет написано мной для теста ',
      likeCount: 23,
      shareCount: 1,
      date: new Date('12 march 2020'),
    },
    {
      id: 2,
      message: 'Какое-то сообщение, которое потом будет написано мной для теста 22',
      likeCount: 223,
      shareCount: 21,
      date: new Date('12 march 2020 12:30'),
    },
  ],
  profile: null,
  status: '',
  isLoadAvatar: true,
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
          date: new Date(),
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
    case DELETE_POST:
      return { ...state, post: [...state.post.filter(post => post.id !== action.postId)] };
    case SAVE_PHOTO_SUCCES:
      return { ...state, profile: { ...state.profile, photos: action.photo } };
    case LOAD_PHOTO_SUCCES:
      return { ...state, isLoadAvatar: action.isLoad };

    default:
      return state;
  }
};

//action creators
export const addPost = text => ({ type: ADD_POST, text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const deleteUserProfile = () => ({ type: SET_USER_PROFILE });
export const setStatus = status => ({ type: SET_STATUS, status });
export const deletePost = postId => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = photo => ({ type: SAVE_PHOTO_SUCCES, photo });
export const loadPhotoSuccess = isLoad => ({ type: LOAD_PHOTO_SUCCES, isLoad });
// export const updateStatus = status => ({ type: UPDATE_STATUS, status });

//Thunk
export const getProfile = id => {
  return async dispatch => {
    const response = await userAPI.getProfile(id);
    dispatch(setUserProfile(response.data));
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

export const savePhoto = photo => dispatch => {
  dispatch(loadPhotoSuccess(false));
  profileAPI.savePhoto(photo).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
      dispatch(loadPhotoSuccess(true));
    }
  });
};

export default profileReducer;
