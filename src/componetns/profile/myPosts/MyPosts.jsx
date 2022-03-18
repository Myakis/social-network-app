import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';
import { Form, Field } from 'react-final-form';

const MyPost = props => {
  const addPost = text => {
    props.addPost(text);
  };

  let Posts = props.post.map(post => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likeCount={post.likeCount}
      shareCount={post.shareCount}
      photo={props.photo}
    />
  ));

  return (
    <div>
      <FieldPostForm addPost={addPost} />
      {Posts}
    </div>
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
          <Field component='textarea' className={classes.textarea} name='post' />
          <button type='submit' className={classes.button}>
            Добавить запись
          </button>
        </form>
      )}
    />
  );
};

export default MyPost;
