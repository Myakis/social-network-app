import MyPost from './myPosts/MyPosts';
import classes from './Profile.module.css';

const ProfilPage = () => {
  return (
    <main className={classes.content}>
      <div className={classes.header}>
        <img src='https://7oom.ru/wp-content/uploads/peizaji-01.jpg' alt='' />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <div className={classes.avatar}>
            <img src='https://frontandrew.ru/img/avatar.webp' alt='avatar' />
          </div>
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

        <MyPost />
      </div>
    </main>
  );
};

export default ProfilPage;
