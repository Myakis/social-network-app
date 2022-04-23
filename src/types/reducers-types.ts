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
  contacts: ContactsType;
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
