import classes from './MyPost.module.css';
import Post from './post/MyPosts';

const MyPost = props => {
  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea className={classes.textarea} name='post'></textarea>
        <button className={classes.button}>Добавить запись </button>
      </form>

      {props.post.map(post => (
        <Post id={post.id} message={post.message} likeCount={post.likeCount} shareCount={post.shareCount} />
      ))}
    </div>
  );
};

export default MyPost;
