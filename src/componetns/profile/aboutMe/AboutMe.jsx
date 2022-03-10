import classes from './AboutMe.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';

const Avatar = () => {
  return (
    <div className={classes.avatar}>
      <img src='https://frontandrew.ru/img/avatar.webp' alt='avatar' />
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className={classes.body}>
      <Avatar />
      <ProfileInfo />
    </div>
  );
};
export default AboutMe;
