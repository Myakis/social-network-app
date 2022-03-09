import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const Messages = () => {
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>
        <div className={classes.item}>
          <NavLink to='/messages/1'>Андрей</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages/2'>Алексей</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages/3'>Леонид</NavLink>
        </div>
      </div>
      <div className={classes.list}>
        <div className={classes.item}>
          <div className={classes.message}>Привет</div>
          <div className={classes.message}>Привет</div>
          <div className={classes.message}>Как дела</div>
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
