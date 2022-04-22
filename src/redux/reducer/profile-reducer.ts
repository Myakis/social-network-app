import { profileAPI, userAPI } from '../../api';
import { ProfileType } from '../../types/reducers-types';
import { getIconAvatar } from './auth-reducer.ts';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const DELETE_USER_PROFILE = 'DELETE-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES';
const LOAD_PHOTO_SUCCES = 'LOAD-PHOTO-SUCCES';
const SAVE_DATA_SUCCES = 'SAVE-DATA-SUCCES';
// const UPDATE_STATUS = 'UPDATE-STATUS';

interface PostDataTypes {
  id: number;
  message: string;
  likeCount: number;
  shareCount: number;
  date: Date;
}
interface UserProfileTypes {}

let initialState = {
  post: [
    {
      id: 1,
      message: 'Тестовое сообщение',
      likeCount: 23,
      shareCount: 1,
      date: new Date('12 march 2020'),
    },
    {
      id: 2,
      message:
        'Еще одно тестовое сообщнее, но уже чуток побольше, с целью проверки отображения больших текстов в блоке постов и в будущей корректировки',
      likeCount: 223,
      shareCount: 21,
      date: new Date('12 march 2020 12:30'),
    },
  ] as Array<PostDataTypes>,
  profile: null as ProfileType | null,
  status: '',
  isLoadAvatar: true,
};

export type initialStateTypes = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateTypes => {
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
    case SAVE_DATA_SUCCES:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profileData,
          contacts: state.profile.contacts
            ? { ...state.profile.contacts, ...action.profileData.contacts }
            : '',
        },
      };

    default:
      return state;
  }
};

//action creators
export const addPost = (text: string) => ({ type: ADD_POST, text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const deleteUserProfile = () => ({ type: SET_USER_PROFILE });
export const setStatus = (status: string) => ({ type: SET_STATUS, status });
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photo: string) => ({ type: SAVE_PHOTO_SUCCES, photo });
export const loadPhotoSuccess = (isLoad: boolean) => ({ type: LOAD_PHOTO_SUCCES, isLoad });
export const saveDataSuccess = (profileData: ProfileType) => ({
  type: SAVE_DATA_SUCCES,
  profileData,
});
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
      dispatch(getIconAvatar(response.data.data.photos.small));
      dispatch(loadPhotoSuccess(true));
    }
  });
};
export const saveData = profileData => async dispatch => {
  return profileAPI.saveData(profileData).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(saveDataSuccess(profileData));
    } else {
      return response;
    }
  });
};

export default profileReducer;
