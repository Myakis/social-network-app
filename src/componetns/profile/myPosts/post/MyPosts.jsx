import classes from './Post.module.css';
const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.body}>
        <div className={classes.avatar}>
          <img src='https://frontandrew.ru/img/avatar.webp' alt='' />
        </div>
        <div className={classes.content}>
          Тут я буду писать свои посты и публиковать многое другое. Моя первый пост в моей первой соц. сетиТут я буду писать свои
          посты и публиковать многое другое. Моя первый пост в моей первой соц. сетиТут я буду писать свои посты и публиковать
          многое другое. Моя первый пост в моей первой соц. сетиТут я буду писать свои посты и публиковать многое другое. Моя
          первый пост в моей первой соц. сетиТут я буду писать свои посты и публиковать многое другое. Моя первый пост в моей
          первой соц. сетиТут я буду писать свои посты и публиковать многое другое. Моя первый пост в моей первой соц. сети
        </div>
      </div>
      <div className={classes.tools}>
        <span className={classes.share}>
          <span className={classes.count}>2</span>
          Подделиться
        </span>
        <span className={classes.comment}>Коммент</span>
        <span className={classes.like}>
          <span className={classes.count}>11</span> Лайк
        </span>
      </div>
    </div>
  );
};

export default Post;
