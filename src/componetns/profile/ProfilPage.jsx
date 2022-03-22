import Preloader from '../common/preloader/Preloader';
import AboutMe from './aboutMe/AboutMe';
import MyPostConteiner from './myPosts/MyPostsConteiner';
import classes from './Profile.module.css';

const ProfilePage = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.header}>
        <img src='https://7oom.ru/wp-content/uploads/peizaji-01.jpg' alt='' />
      </div>
      <div className={classes.wrapper}>
        {!props.loadProfile && <Preloader />}
        <AboutMe profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
        <MyPostConteiner profile={props.profile} />
      </div>
    </div>
  );
};

export default ProfilePage;
