import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';
import { Form, Field } from 'react-final-form';

const MyPost = props => {
  const addPost = text => {
    props.addPost(text);
  };
  let Posts = [...props.post].reverse().map((post, i) => {
    return (
      <Post
        key={i}
        id={post.id}
        message={post.message}
        likeCount={post.likeCount}
        shareCount={post.shareCount}
        photo={props.photo}
      />
    );
  });

  return (
    <>
      {props.isOwer && <FieldPostForm addPost={addPost} />}
      <div className={classes.blog}>{Posts}</div>
    </>
  );
};

const FieldPostForm = props => {
  const onSubmit = (data, e) => {
    props.addPost(data.post);
    e.reset();
  };
  const validate = data => {};

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} action='#' className={classes.form}>
          <Field component='textarea' className={classes.textarea} name='post' autoComplete='off' />
          <button type='submit' className={classes.button}>
            Добавить запись
          </button>
        </form>
      )}
    />
  );
};

export default MyPost;
