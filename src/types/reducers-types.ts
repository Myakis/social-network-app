import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootStateType } from '../redux/store-redux';

//Типизирование Action
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;

//Типизирование Thnuk
export type ThunkType = ThunkAction<void, RootStateType, unknown, AnyAction>;

//Типизация useSelector
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

//Переиспользуемные интерфейсы/Типы
export interface PhotosType {
  small: string | null;
  large: string | null;
}

export interface ContactsType {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
}

export interface ProfileType {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType | null;
  photos: PhotosType;
  aboutMe?: string | null;
}

export interface UserType {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed?: boolean;
}
