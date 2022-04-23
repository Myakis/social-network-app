import { FC } from 'react';
import { UserType } from '../../types/reducers-types';
import Preloader from '../common/preloader/Preloader';
import AboutMe from './aboutMe/AboutMe';
import MyPostConteiner from './myPosts/MyPostsConteiner';
import classes from './Profile.module.css';

interface PropsType {
  isOwer?: boolean | undefined;
  profile: UserType;
  loadProfile: boolean;
  status: string;
  isLoadAvatar: boolean;
  updateUserStatus: string;
  savePhoto: (data: object) => void;
  saveData: (data: object) => void;
}

const ProfilePage: FC<PropsType> = props => {
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
          status={props.status}
          updateUserStatus={props.updateUserStatus}
          isOwer={props.isOwer}
          savePhoto={props.savePhoto}
          isLoadAvatar={props.isLoadAvatar}
          saveData={props.saveData}
        />
        <MyPostConteiner isOwer={props.isOwer} />
      </div>
    </div>
  );
};

export default ProfilePage;
