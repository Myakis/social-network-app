import React from 'react';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../redux/dialog-reducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';

const MessagesConteiner = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        //Определяем стейт
        let state = store.getState();

        const onChangeMessage = textMessage => {
          let action = updateTextMessageActionCreator(textMessage);
          store.dispatch(action);
        };
        const addMessage = () => {
          let action = addMessageActionCreator();
          store.dispatch(action);
        };
        return (
          <Messages
            onChangeMessage={onChangeMessage}
            addMessage={addMessage}
            state={state}
            messageText={state.dialog.messageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesConteiner;
