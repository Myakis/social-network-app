import Preloader from '../common/preloader/Preloader';
import AboutMe from './aboutMe/AboutMe';
import MyPostConteiner from './myPosts/MyPostsConteiner';
import classes from './Profile.module.css';

const ProfilePage = props => {
  //Если страница профиля еще не загружена, отобразить спиннер
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.header}>
        <img src='https://7oom.ru/wp-content/uploads/peizaji-01.jpg' alt='' />
      </div>
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
        />
        <MyPostConteiner profile={props.profile} isOwer={props.isOwer} />
      </div>
    </div>
  );
};

export default ProfilePage;
