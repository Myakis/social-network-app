import React, { createRef, FC, useEffect } from 'react';

import classes from './AboutMe.module.css';
import avatar from 'images/avatar.png';
import Preloader from 'components/Preloader';
import { ProfileType } from 'types/reducers-types';
import ProfileInfo from './components/ProfileInfo';

interface IProps {
  isOwner: boolean | undefined;
  isLoadAvatar: boolean;
  photo: string | null;
  savePhoto: (file: any) => void;
  id: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  changeOpenModal: () => void;
}
const Avatar: FC<IProps> = ({
  isOwner,
  isLoadAvatar,
  isOpen,
  setOpen,
  changeOpenModal,
  ...props
}) => {
  const inputFile = createRef<HTMLInputElement>();

  const onChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0]);
    }
  };
  useEffect(() => {
    setOpen(false);
  }, [props.id]);

  return (
    <div className={classes.profilePhoto}>
      <div
        className={classes.avatar}
        onClick={() => {
          inputFile.current?.click();
        }}>
        <img src={props.photo || avatar} alt='avatar' />
        {!isLoadAvatar && <Preloader />}
      </div>

      {isOwner ? (
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
              inputFile.current?.click();
            }}>
            Изменить фото
          </button>
          <button
            disabled={!isLoadAvatar}
            className={classes.avatarEdit}
            onClick={() => {
              inputFile.current?.click();
            }}></button>
        </>
      ) : (
        <button className={classes.newMessage} onClick={changeOpenModal}>
          Написать сообщение
        </button>
      )}
    </div>
  );
};

interface IAboutMeProps {
  profile: ProfileType;
  isOwer: boolean | undefined;
  isLoadAvatar: boolean;
  status: string;
  isOpen: boolean;

  savePhoto: (data: any) => void;
  saveData: (data: any) => Promise<any>;
  updateUserStatus: (status: string) => void;
  setOpen: (open: boolean) => void;
  changeOpenModal: () => void;
}

const AboutMe: FC<IAboutMeProps> = props => {
  return (
    <div className={classes.body}>
      <Avatar
        changeOpenModal={props.changeOpenModal}
        isOpen={props.isOpen}
        setOpen={props.setOpen}
        id={props.profile.userId}
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
