import Dialog from './dialog/Dialog';
import Message from './message/Message';
import classes from './Messages.module.css';
import React from 'react';

let newMessageEl = React.createRef();

const Messages = props => {
  const onChangeMessage = () => {
    let textMessage = newMessageEl.current.value;
    props.updateTextMessage(textMessage);
  };
  const addMessage = e => {
    e.preventDefault();
    props.addMessage(props.state.messageText);
    props.updateTextMessage('');
  };

  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>
        {props.state.users.map(item => {
          return <Dialog name={item.name} id={item.id} />;
        })}
      </div>
      <div className={classes.list}>
        <div className={classes.item}>
          {props.state.message.map(item => {
            return <Message message={item.message} id={item.id} user={item.user} />;
          })}
        </div>
        <form action='#' className={classes.form}>
          <input
            onChange={onChangeMessage}
            value={props.state.messageText}
            className={classes.input}
            type='text'
            ref={newMessageEl}></input>
          <button onClick={addMessage} type='submit' className={classes.button}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
