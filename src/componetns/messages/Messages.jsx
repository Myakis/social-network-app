import Dialog from './dialog/DialogUserItem';
import Message from './message/Message';
import classes from './Messages.module.css';
import React from 'react';

const Messages = props => {
  const onChangeMessage = e => {
    let textMessage = e.target.value;

    props.onChangeMessage(textMessage);
  };
  const addMessage = e => {
    e.preventDefault();
    props.addMessage();
  };
  // Отображение списка пользователей, с кем есть переписка
  let listUser = props.state.dialog.users.map(item => <Dialog key={item.id} name={item.name} id={item.id} />);
  //Отображение сообщений
  let listMessage = props.state.dialog.message.map((item, i) => (
    <Message key={i} message={item.message} id={item.id} user={item.user} />
  ));

  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>{listUser}</div>
      <div className={classes.list}>
        <div className={classes.item}>{listMessage}</div>
        <form action='#' className={classes.form}>
          <input onChange={onChangeMessage} value={props.messageText} className={classes.input} type='text' />
          <button onClick={addMessage} type='submit' className={classes.button}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
