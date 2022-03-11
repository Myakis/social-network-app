import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';

let newPostEl = React.createRef();

const addPost = e => {
  e.preventDefalult();
  let textPost = newPostEl.current.value;
};

const MyPost = props => {
  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea ref={newPostEl} className={classes.textarea} name='post'></textarea>
        <button onClick={addPost} className={classes.button}>
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
