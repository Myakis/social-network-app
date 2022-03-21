import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';
import { Form, Field } from 'react-final-form';

const MyPost = props => {
  const addPost = text => {
    props.addPost(text);
  };
  let Posts = [...props.post].reverse().map(post => {
    const date =
      (post.date.getMonth() < 10 ? '0' + post.date.getMonth() : post.date.getMonth()) +
      '        ' +
      (post.date.getDay() < 10 ? '0' + post.date.getDay() : post.date.getDay()) +
      ':' +
      (post.date.getHours() < 10 ? '0' + post.date.getHours() : post.date.getHours()) +
      ':' +
      (post.date.getMinutes() < 10 ? '0' + post.date.getMinutes() : post.date.getMinutes());
    return (
      <Post
        key={post.id}
        id={post.id}
        message={post.message}
        likeCount={post.likeCount}
        shareCount={post.shareCount}
        photo={props.photo}
        date={date}
      />
    );
  });

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
