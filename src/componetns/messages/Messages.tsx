import { FormApi } from 'final-form';
import React, { FC, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { RootStateType } from '../../redux/store-redux';

import Dialog from './dialog/DialogUserItem';
import Message from './message/Message';
import classes from './Messages.module.css';

interface IProps {
  state: RootStateType;
  addMessage: (text: string) => void;
}
const Messages: FC<IProps> = props => {
  const addMessage = (messageText: string) => {
    props.addMessage(messageText);
  };

  // Отображение списка пользователей, с кем есть переписка
  let listUser = props.state.dialog.users.map(item => (
    <Dialog key={item.id} name={item.name} id={item.id} />
  ));

  //Отображение сообщений
  let listMessage = props.state.dialog.message.map((item, i) => (
    <Message key={i} message={item.message} id={item.id} user={item.user} />
  ));

  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>{listUser}</div>
      <div className={classes.dialogWindow}>
        <div className={classes.list}>
          <div className={classes.item}>{listMessage}</div>
        </div>
        <FieldMessageForm addMessage={addMessage} />
      </div>
    </div>
  );
};

interface IForm {
  message: string;
}

interface IFieldMessageForm {
  addMessage: (message: string) => void;
}
const FieldMessageForm: FC<IFieldMessageForm> = props => {
  const onSubmit = (data: IForm, e: any) => {
    props.addMessage(data.message);
    e.reset();
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Field
            component='input'
            name='message'
            className={classes.input}
            type='text'
            autoComplete='off'
          />
          <button type='submit' className={classes.button}>
            Отправить
          </button>
        </form>
      )}
    />
  );
};

export default Messages;