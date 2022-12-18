import React, { FC } from 'react';

import { ProfileType } from '../../types/reducers-types';
import Preloader from '../../components/Preloader';
import AboutMe from './components/AboutMe/Index';
import MyPostContainer from './components/MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import { useState } from 'react';
import MessageModal from './components/MessageModal';

interface PropsType {
  isOwer?: boolean | undefined;
  profile: ProfileType;
  loadProfile: boolean;
  status: string | null;
  isLoadAvatar: boolean;

  updateUserStatus: (status: string) => void;
  savePhoto: (data: any) => void;
  saveData: (data: any) => Promise<any>;
}

const ProfilePage: FC<PropsType> = React.memo(props => {
  const [isOpen, setOpen] = useState(false);
  //Если страница профиля еще не загружена, отобразить спиннер

  if (!props.profile) {
    return <Preloader />;
  }
  const changeOpenModal = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        {/* Если ответ с данными о конкретной странице еще не пришел с сервера, отобразить спиннер */}
        {!props.loadProfile && <Preloader />}
        <AboutMe
          profile={props.profile}
          status={props.status ? props.status : ''}
          updateUserStatus={props.updateUserStatus}
          isOwer={props.isOwer}
          savePhoto={props.savePhoto}
          isLoadAvatar={props.isLoadAvatar}
          saveData={props.saveData}
          isOpen={isOpen}
          setOpen={setOpen}
          changeOpenModal={changeOpenModal}
        />
        <MyPostContainer isOwer={props.isOwer} />{' '}
        {isOpen && (
          <MessageModal
            userName={props.profile.fullName}
            id={props.profile.userId}
            clickHandler={changeOpenModal}
          />
        )}
      </div>
    </div>
  );
});

export default ProfilePage;
