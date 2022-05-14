import axios from 'axios';

import { GetUsersListType, MeResponseType, ICaptcha, IResponse } from '../types/api-types';
import { IMessageData, IUserNameTypes, ProfileType } from '../types/reducers-types';

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ed0127cc-e53e-4779-b436-6cd965e8ebe0',
  },
});

//Ассинхронные операции
export interface IFormSearch {
  currentPage: string;
  usersCount: string;
  term: string;
  friend: boolean | null;
}

export const userAPI = {
  getUser(currentPage = 1, usersCount = 5, term = '', friend: null | boolean = null) {
    return instanceAxios.get<GetUsersListType>(
      `users?page=${currentPage}&count=${usersCount}&term=${term}` +
        (friend ? `&friend=${friend}` : ''),
    );
  },
  follow(id: number) {
    return instanceAxios.post<IResponse>(`follow/${id}`, {}).then(res => res.data);
  },
  unFollow(id: number) {
    return instanceAxios.delete<IResponse>(`follow/${id}`).then(res => res.data);
  },

  getProfile(id: number) {
    return profileAPI.getProfile(id);
  },
};

export const securityAPI = {
  getCaptcha() {
    return instanceAxios.get<ICaptcha>(`security/get-captcha-url`);
  },
};

export const dialogsAPI = {
  getDialogs() {
    return instanceAxios.get<IUserNameTypes[]>(`dialogs`).then(res => res.data);
  },
  getListMessages(id: number) {
    return instanceAxios.get<IMessageData>(`dialogs/${id}/messages`).then(res => res.data);
  },

  sendMessage(id: number, message: string) {
    return instanceAxios
      .post<any>(`dialogs/${id}/messages`, { body: message })
      .then(res => res.data);
  },
  startDialog(id: number) {
    return instanceAxios.put<any>(`dialogs/${id}`).then(res => res.data);
  },
};

export const profileAPI = {
  getProfile(id: number) {
    return instanceAxios.get<ProfileType>(`profile/${id}`);
  },
  getStatus(id: number) {
    return instanceAxios.get<string | null>(`profile/status/${id}`);
  },
  updateStatus(status: string) {
    return instanceAxios.put<IResponse>(`profile/status`, { status });
  },
  savePhoto(photo: any) {
    const data = new FormData();
    data.append('image', photo);
    return instanceAxios.put(`profile/photo`, data, {
      headers: { 'Content-Type': `multipart/form-data` },
    });
  },
  getPhoto() {
    return instanceAxios.put(`profile/photo`);
  },
  saveData(profileData: ProfileType) {
    return instanceAxios.put(`profile`, profileData);
  },
};

export const authAPI = {
  me() {
    return instanceAxios.get<MeResponseType>(`auth/me`);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instanceAxios.post(`auth//login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instanceAxios.delete(`auth/login`);
  },
};
