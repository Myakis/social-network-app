import classes from './MyPost.module.css';
import Post from './post/MyPosts';
const MyPost = () => {
  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea className={classes.textarea} name='post' id='' cols='30' rows='10'></textarea>
        <button className={classes.button}>Добавить запись </button>
      </form>
      <Post />
      <Post />
    </div>
  );
};

export default MyPost;
