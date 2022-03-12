import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';

let newPostEl = React.createRef();

const MyPost = props => {
  const addPost = e => {
    e.preventDefault();

    let action = { type: 'ADD-POST' };
    props.dispatch(action);
  };

  const onChangePost = () => {
    let textPost = newPostEl.current.value;
    // props.updateTextPost(textPost);
    let action = { type: 'UPDATE-TEXT-POST', newText: textPost };
    props.dispatch(action);
  };
  return (
    <div>
      <form action='#' className={classes.form}>
        <textarea onChange={onChangePost} value={props.valueText} ref={newPostEl} className={classes.textarea} name='post' />
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
