import React, { FC } from 'react';
import classes from './MyPost.module.css';
import Post from './post/PostItem';
import { Form, Field } from 'react-final-form';
import { PostType } from './MyPostsContainer';

interface PropsType {
  addPost: (text: string) => void;
  post: Array<PostType>;
  photo: string;
  isOwer: boolean;
}

const MyPost: FC<PropsType> = props => {
  const addPost = (text: string) => {
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

const FieldPostForm = (props: any) => {
  const onSubmit = (data: any, e: any) => {
    props.addPost(data.post);
    e.reset();
  };
  const validate = (values: any): any => {};

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
