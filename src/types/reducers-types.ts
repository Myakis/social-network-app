export interface PhotosType {
  small: string;
  large: string;
}

export interface ContactsType {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export interface ProfileType {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: Array<ContactsType>;
  aboutMe?: string;
  photos: PhotosType;
}
export interface UserType {
  id: number;
  name:string
  status:string
  photos:PhotosType
}
