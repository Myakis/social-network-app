import classes from './MyPost.module.css';
import Post from './post/MyPosts';
const MyPost = () => {
  let postData = [
    { message: 'Какое-то сообщение, которое потом будет написано мной для теста ', likeCount: 23, shareCount: 1, id: 1 },
    { message: 'Какое-то сообщение, которое потом будет написано мной для теста 22', likeCount: 223, shareCount: 21, id: 2 },
  ];

  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea className={classes.textarea} name='post'></textarea>
        <button className={classes.button}>Добавить запись </button>
      </form>

      {postData.map(post => {
        return <Post id={post.id} message={post.message} likeCount={post.likeCount} shareCount={post.shareCount} />;
      })}
    </div>
  );
};

export default MyPost;
