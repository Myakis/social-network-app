import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { profileAPI, userAPI } from '../../api';
import { PhotosType, ProfileType } from '../../types/reducers-types';
import { AppRootReducerType } from '../store-redux';
import { getIconAvatar } from './auth-reducer';

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
type ActionTypes =
  | AddPostActionType
  | SetUserProfileActionType
  | DeleteUserProfileActionType
  | SetStatusActionType
  | DeletePostActionType
  | SavePhotoSuccessActionType
  | LoadPhotoSuccessActionType
  | saveDataSuccessActionType;

const profileReducer = (state = initialState, action: ActionTypes): initialStateTypes => {
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
      return { ...state, profile: { ...state.profile, photos: action.photo } as ProfileType };
    case LOAD_PHOTO_SUCCES:
      return { ...state, isLoadAvatar: action.isLoad };
    case SAVE_DATA_SUCCES:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profileData,
          contacts: state.profile!.contacts
            ? { ...state.profile!.contacts, ...action.profileData.contacts }
            : null,
        },
      };

    default:
      return state;
  }
};

//action creators
interface AddPostActionType {
  type: typeof ADD_POST;
  text: string;
}
export const addPost = (text: string): AddPostActionType => ({ type: ADD_POST, text });

interface SetUserProfileActionType {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});
interface DeleteUserProfileActionType {
  type: typeof DELETE_USER_PROFILE;
}
export const deleteUserProfile = (): DeleteUserProfileActionType => ({ type: DELETE_USER_PROFILE });

interface SetStatusActionType {
  type: typeof SET_STATUS;
  status: string;
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

interface DeletePostActionType {
  type: typeof DELETE_POST;
  postId: number;
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

interface SavePhotoSuccessActionType {
  type: typeof SAVE_PHOTO_SUCCES;
  photo: PhotosType;
}
export const savePhotoSuccess = (photo: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCES,
  photo,
});

interface LoadPhotoSuccessActionType {
  type: typeof LOAD_PHOTO_SUCCES;
  isLoad: boolean;
}
export const loadPhotoSuccess = (isLoad: boolean): LoadPhotoSuccessActionType => ({
  type: LOAD_PHOTO_SUCCES,
  isLoad,
});

interface saveDataSuccessActionType {
  type: typeof SAVE_DATA_SUCCES;
  profileData: ProfileType;
}
export const saveDataSuccess = (profileData: ProfileType): saveDataSuccessActionType => ({
  type: SAVE_DATA_SUCCES,
  profileData,
});
// export const updateStatus = status => ({ type: UPDATE_STATUS, status });

type ThunkType = ThunkAction<void, AppRootReducerType, unknown, AnyAction>;
//Thunk
export const getProfile = (id: number): ThunkType => {
  return async dispatch => {
    const response = await userAPI.getProfile(id);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (id: number): ThunkType => {
  return dispatch => {
    profileAPI.getStatus(id).then(response => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateUserStatus = (status: string): ThunkType => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export const savePhoto =
  (photo: string): ThunkType =>
  dispatch => {
    dispatch(loadPhotoSuccess(false));
    profileAPI.savePhoto(photo).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(getIconAvatar(response.data.data.photos.small));
        dispatch(loadPhotoSuccess(true));
      }
    });
  };
export const saveData =
  (profileData: ProfileType): ThunkType =>
  async dispatch => {
    return profileAPI.saveData(profileData).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(saveDataSuccess(profileData));
      } else {
        return response;
      }
    });
  };

export default profileReducer;
