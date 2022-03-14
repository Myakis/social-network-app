import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';

const MyPost = props => {
  const onChangePost = e => {
    let textPost = e.target.value;
    props.onChangePost(textPost);
  };

  const addPost = e => {
    e.preventDefault();
    props.addPost();
  };

  let Posts = props.post.map(post => (
    <Post key={post.id} id={post.id} message={post.message} likeCount={post.likeCount} shareCount={post.shareCount} />
  ));

  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea onChange={onChangePost} value={props.valueText} className={classes.textarea} name='post' />
        <button onClick={addPost} type='submit' className={classes.button}>
          Добавить запись
        </button>
      </form>
      {Posts}
    </div>
  );
};

export default MyPost;
