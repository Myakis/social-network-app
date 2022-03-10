import Dialog from './dialog/Dialog';
import Message from './message/Message';
import classes from './Messages.module.css';

const Messages = props => {
  let listUserDialog = [
    {
      id: '1',
      name: 'Андрей',
    },
    {
      id: '2',
      name: 'Леонид',
    },
    {
      id: '3',
      name: 'Алексей',
    },
  ];

  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>
        {listUserDialog.map(item => {
          return <Dialog name={item.name} id={item.id} />;
        })}
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
