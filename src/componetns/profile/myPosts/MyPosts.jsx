import React from 'react';
import { addPostActionCreator, updateTextPostActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';
const MyPost = props => {
  const onChangePost = e => {
    let textPost = e.target.value;
    let action = updateTextPostActionCreator(textPost);
    props.dispatch(action);
  };

  const addPost = e => {
    e.preventDefault();

    let action = addPostActionCreator();
    props.dispatch(action);
  };

  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea onChange={onChangePost} value={props.valueText} className={classes.textarea} name='post' />
        <button onClick={addPost} type='submit' className={classes.button}>
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
