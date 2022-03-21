import classes from './Post.module.css';
import avatar from '../../../../assets/img/avatar.png';
const Post = props => {
  return (
    <div className={classes.post}>
      <div className={classes.body}>
        <div className={classes.avatar}>
          <img src={!props.photo ? avatar : props.photo} alt='avatar' />
        </div>
        <div className={classes.content}>{props.message}</div>
      </div>
      <div className={classes.tools}>
        <span className={classes.share}>
          <span className={classes.count}>{props.shareCount}</span>
          Подделиться
        </span>
        <span className={classes.comment}>Коммент</span>
        <span className={classes.like}>
          <span className={classes.count}>{props.likeCount}</span> Лайк
        </span>
        <span className={classes.like}>
          <span className={classes.count}>{props.date ? props.date : ''}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
