import React, { FC } from 'react';

import { ProfileType } from '../../types/reducers-types';
import Preloader from '../../components/common/preloader/Preloader';
import AboutMe from './aboutMe/AboutMe';
import MyPostContainer from './myPosts/MyPostsContainer';
import classes from './Profile.module.css';

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
  //Если страница профиля еще не загружена, отобразить спиннер

  if (!props.profile) {
    return <Preloader />;
  }

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
        />
        <MyPostContainer isOwer={props.isOwer} />
      </div>
    </div>
  );
});

export default ProfilePage;
