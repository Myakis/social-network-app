import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = props => {
  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.description}>
        <div className={`${classes.item} ${classes.name}`}>{props.fullName}</div>
        <div className={classes.item}>
          <span>{props.description}</span>
        </div>
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
        <div className={classes.item}>
          <span>День рождения:</span> 10.10.2001
        </div>
        <div className={classes.item}>
          <span> Город:</span> Уссурийск
        </div>
        <div className={classes.item}>
          <span>Образование: </span> Незаконченное высшее
        </div>
        {props.twitter ? (
          <div className={classes.item}>
            <span>Twitter:</span>
            <a href={props.twitter}> {props.twitter}</a>
          </div>
        ) : (
          ''
        )}
        {props.vk ? (
          <div className={classes.item}>
            <span>vk:</span>
            <a href={props.vk}> {props.vk}</a>
          </div>
        ) : (
          ''
        )}
        {props.instagram ? (
          <div className={classes.item}>
            <span>instagram:</span>
            <a href={props.instagram}> {props.instagram}</a>
          </div>
        ) : (
          ''
        )}
        {props.github ? (
          <div className={classes.item}>
            <span>github:</span>
            <a href={props.github}> {props.github}</a>
          </div>
        ) : (
          ''
        )}
        {props.website ? (
          <div className={classes.item}>
            <span>website:</span>
            <a href={props.website}> {props.website}</a>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default ProfileInfo;
