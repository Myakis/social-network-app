import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const Dialog = props => {
  return (
    <div className={classes.item}>
      <NavLink to={'/messages/1' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={classes.message}>{props.message}</div>;
};

const Messages = () => {
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>
        <Dialog name='Андей' id='1' />
        <Dialog name='Алексей' id='2' />
        <Dialog name='Леонид' id='3' />
      </div>
      <div className={classes.list}>
        <div className={classes.item}>
          <Message message='Привет' />
          <Message message='Привет' />
          <Message message='Как дела' />
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
