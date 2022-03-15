import classes from './ProfileInfo.module.css';

const ProfileInfo = props => {
  return (
    <div>
      <div className={classes.description}>
        <div className={`${classes.item} ${classes.name}`}>{props.fullName}</div>
        <div className={classes.item}>
          <span>{props.description}</span>
        </div>
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
      </div>
    </div>
  );
};
export default ProfileInfo;
