import classes from './AboutMe.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';

const Avatar = props => {
  return (
    <div className={classes.avatar}>
      <img src={props.photo} alt='avatar' />
    </div>
  );
};

const AboutMe = props => {
  return (
    <div className={classes.body}>
      <Avatar photo={props.profile.photos.large} />
      <ProfileInfo
        description={props.profile.aboutMe}
        fullName={props.profile.fullName}
        twitter={props.profile.contacts.twitter}
      />
    </div>
  );
};
export default AboutMe;
