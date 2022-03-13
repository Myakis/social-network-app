import React from 'react';
import { addPostActionCreator, updateTextPostActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPost from './MyPosts';
const MyPostConteiner = () => {
  //Определяем стейт

  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        const onChangePost = textPost => {
          let action = updateTextPostActionCreator(textPost);
          store.dispatch(action);
        };

        const addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };

        return (
          <MyPost addPost={addPost} onChangePost={onChangePost} post={state.profile.post} valueText={state.profile.textPost} />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostConteiner;
