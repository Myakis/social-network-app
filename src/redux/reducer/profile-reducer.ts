import { profileAPI, userAPI } from '../../api';
import { ActionsTypes, PhotosType, ProfileType, ThunkType } from '../../types/reducers-types';
import { actions } from './auth-reducer';
// const { getIconAvatar } = actions;

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const DELETE_USER_PROFILE = 'DELETE-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES';
const LOAD_PHOTO_SUCCES = 'LOAD-PHOTO-SUCCES';
const SAVE_DATA_SUCCES = 'SAVE-DATA-SUCCES';

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

const profileReducer = (
  state = initialState,
  action: ActionsTypes<typeof ProfileActions>,
): initialStateTypes => {
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

export const ProfileActions = {
  addPost: (text: string) => ({ type: ADD_POST, text } as const),
  setUserProfile: (profile: ProfileType) =>
    ({
      type: SET_USER_PROFILE,
      profile,
    } as const),
  deleteUserProfile: () => ({ type: DELETE_USER_PROFILE } as const),
  setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
  deletePost: (postId: number) => ({ type: DELETE_POST, postId } as const),
  savePhotoSuccess: (photo: PhotosType) =>
    ({
      type: SAVE_PHOTO_SUCCES,
      photo,
    } as const),
  loadPhotoSuccess: (isLoad: boolean) =>
    ({
      type: LOAD_PHOTO_SUCCES,
      isLoad,
    } as const),
  saveDataSuccess: (profileData: ProfileType) =>
    ({
      type: SAVE_DATA_SUCCES,
      profileData,
    } as const),
};

// export const updateStatus = status => ({ type: UPDATE_STATUS, status });

//Thunk
export const getProfile = (id: number): ThunkType => {
  return async dispatch => {
    const response = await userAPI.getProfile(id);
    dispatch(ProfileActions.setUserProfile(response.data));
  };
};

export const getStatus = (id: number): ThunkType => {
  return dispatch => {
    profileAPI.getStatus(id).then(response => {
      dispatch(ProfileActions.setStatus(response.data));
    });
  };
};

export const updateUserStatus = (status: string): ThunkType => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(ProfileActions.setStatus(status));
      }
    });
  };
};

export const savePhoto =
  (photo: string): ThunkType =>
  dispatch => {
    dispatch(ProfileActions.loadPhotoSuccess(false));
    profileAPI.savePhoto(photo).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(ProfileActions.savePhotoSuccess(response.data.data.photos));
        dispatch(actions.getIconAvatar(response.data.data.photos.small));
        dispatch(ProfileActions.loadPhotoSuccess(true));
      }
    });
  };
export const saveData =
  (profileData: ProfileType): ThunkType =>
  async dispatch => {
    return profileAPI.saveData(profileData).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(ProfileActions.saveDataSuccess(profileData));
      } else {
        return response;
      }
    });
  };

export default profileReducer;
