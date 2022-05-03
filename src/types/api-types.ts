import { UserType } from './reducers-types';

export enum ResultCodeEnum {
  success = 0,
  error = 1,
  captcha = 10,
}
export interface IResponse<T = {}> {
  data: T;
  resultCode: ResultCodeEnum;
  messages: string[];
}

export interface MeResponseType {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodeEnum;
  messages: string;
}

export interface GetUsersListType {
  error: null | string;
  items: Array<UserType>;
  totalCount: number;
}
export interface ICaptcha {
  url: string;
}
