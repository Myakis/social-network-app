import React from 'react';
import { addPostActionCreator, updateTextPostActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPosts';
const MyPostConteiner = props => {
  //Определяем стейт
  let state = props.store.getState();

  const onChangePost = textPost => {
    let action = updateTextPostActionCreator(textPost);
    props.store.dispatch(action);
  };

  const addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  return <MyPost addPost={addPost} onChangePost={onChangePost} post={state.profile.post} valueText={state.profile.textPost} />;
};

export default MyPostConteiner;
