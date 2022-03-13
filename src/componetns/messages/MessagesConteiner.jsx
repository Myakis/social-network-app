import React from 'react';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../redux/dialog-reducer';
import Messages from './Messages';

const MessagesConteiner = props => {
  //Определяем стейт
  let state = props.store.getState();

  const onChangeMessage = textMessage => {
    let action = updateTextMessageActionCreator(textMessage);
    props.store.dispatch(action);
  };
  const addMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  return (
    <Messages onChangeMessage={onChangeMessage} addMessage={addMessage} state={state} messageText={state.dialog.messageText} />
  );
};

export default MessagesConteiner;
