import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';

let newPostEl = React.createRef();

const MyPost = props => {
  const addPost = e => {
    e.preventDefault();
    let textPost = newPostEl.current.value;
    props.addPost(textPost);
    newPostEl.current.value = '';
  };

  return (
    <div>
      <form onClick={addPost} action='#' className={classes.form}>
        <textarea ref={newPostEl} className={classes.textarea} name='post'></textarea>
        <button type='submit' className={classes.button}>
          Добавить запись
        </button>
      </form>

      {props.post.map(post => {
        return <Post id={post.id} message={post.message} likeCount={post.likeCount} shareCount={post.shareCount} />;
      })}
    </div>
  );
};

export default MyPost;
