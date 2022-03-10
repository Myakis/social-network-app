import Dialog from './dialog/Dialog';
import Message from './message/Message';
import classes from './Messages.module.css';

const Messages = props => {
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>
        {props.dialog.map(item => {
          return <Dialog name={item.name} id={item.id} />;
        })}
      </div>
      <div className={classes.list}>
        <div className={classes.item}>
          {props.message.map(item => {
            return <Message message={item.message} id={item.id} />;
          })}
        </div>
        <form action='#' className={classes.form}>
          <input className={classes.input} type='text'></input>
          <button className={classes.button}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
