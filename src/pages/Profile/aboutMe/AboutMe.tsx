import React, { createRef, FC } from 'react';

import classes from './AboutMe.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';
import avatar from '../../../assets/img/avatar.png';
import Preloader from '../../../components/common/preloader/Preloader';
import { ProfileType } from '../../../types/reducers-types';

interface IProps {
  isOwner: boolean | undefined;
  isLoadAvatar: boolean;
  photo: string | null;
  savePhoto: (file: any) => void;
}
const Avatar: FC<IProps> = ({ isOwner, isLoadAvatar, ...props }) => {
  const inputFile = createRef<any>();

  const onChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.profilePhoto}>
      <div
        className={classes.avatar}
        onClick={() => {
          inputFile.current.click();
        }}>
        <img src={props.photo || avatar} alt='avatar' />
        {!isLoadAvatar && <Preloader />}
      </div>

      {isOwner && (
        <>
          <input
            className='visibility-hidden'
            ref={inputFile}
            onChange={onChangePhoto}
            type={'file'}
            placeholder={'изменить фото'}
          />
          <button
            disabled={!isLoadAvatar}
            className={classes.avatarChange}
            onClick={() => {
              inputFile.current.click();
            }}>
            Изменить фото
          </button>
          <button
            disabled={!isLoadAvatar}
            className={classes.avatarEdit}
            onClick={() => {
              inputFile.current.click();
            }}></button>
        </>
      )}
    </div>
  );
};

interface IAboutMeProps {
  profile: ProfileType;
  isOwer: boolean | undefined;
  isLoadAvatar: boolean;
  status: string;

  savePhoto: (data: any) => void;
  saveData: (data: any) => Promise<any>;
  updateUserStatus: (status: string) => void;
}

const AboutMe: FC<IAboutMeProps> = props => {
  return (
    <div className={classes.body}>
      <Avatar
        photo={props.profile!.photos.large}
        isOwner={props.isOwer}
        savePhoto={props.savePhoto}
        isLoadAvatar={props.isLoadAvatar}
      />
      <ProfileInfo
        saveData={props.saveData}
        status={props.status}
        isOwer={props.isOwer}
        updateUserStatus={props.updateUserStatus}
        profile={props.profile}
      />
    </div>
  );
};
export default AboutMe;
