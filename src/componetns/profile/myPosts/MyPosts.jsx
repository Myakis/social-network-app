import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/MyPosts';

let newPostEl = React.createRef();

const MyPost = props => {
  const addPost = e => {
    e.preventDefault();
    props.addPost(props.valueText);
    props.updateTextPost('');
  };

  const onChangePost = () => {
    let textPost = newPostEl.current.value;
    props.updateTextPost(textPost);
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
