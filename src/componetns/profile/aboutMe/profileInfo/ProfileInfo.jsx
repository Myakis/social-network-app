import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.description}>
        <div className={`${classes.item} ${classes.name}`}>Андрей М.</div>
        <div className={classes.item}>
          <span>День рождения:</span> 10.10.2001
        </div>
        <div className={classes.item}>
          <span> Город:</span> Уссурийск
        </div>
        <div className={classes.item}>
          <span>Образование: </span> Незаконченное высшее
        </div>
        <div className={classes.item}>
          <span>Веб-сайт:</span> <a href='https://frontandrew.ru/'> https://frontandrew.ru</a>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
