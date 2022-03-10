import classes from './MyPost.module.css';
import Post from './post/MyPosts';
const MyPost = () => {
  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea className={classes.textarea} name='post' id='' cols='30' rows='10'></textarea>
        <button className={classes.button}>Добавить запись </button>
      </form>
      <Post message='Какое-то сообщение, которое потом будет написано мной для теста ' likeCount='23' shareCount='1' />
      <Post message='Какое-то сообщение, которое потом будет написано мной для теста 2' likeCount='2333' shareCount='12' />
    </div>
  );
};

export default MyPost;
