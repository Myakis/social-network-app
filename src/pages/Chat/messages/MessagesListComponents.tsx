import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { IChatMessages } from '../../../api/chat-api';
import { sendMessage } from '../../../redux/reducer/chat-reducer';
import { RootStateType } from '../../../redux/store-redux';
import avatarPhoto from '../../../assets/img/avatar.png';
import classes from '../../Dialogs/Messages.module.css';
import cl from './MessagesListComponents.module.scss';
import Preloader from '../../../components/common/preloader/Preloader';

export const Message = (m: IChatMessages) => {
  const myId = useSelector((state: RootStateType) => state.auth.userId);
  return (
    <div className={myId === m.userId ? cl.messageBlockReverse : cl.messageBlock}>
      <div>
        <div className={cl.img}></div>
        <div className={cl.userData}>
          <NavLink to={'/profile/' + m.userId}>
            <img src={m.photo ? m.photo : avatarPhoto} alt='userAvatar' />
          </NavLink>
          <div className={cl.messageBody}> {m.message ? m.message : 'пустое сообщение'}</div>
        </div>
      </div>
    </div>
  );
};

export const SendMessageForm = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStateType) => state.chat.status);
  const [value, setValue] = useState('');

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendMessage(value));
    setValue('');
  };
  if (status === 'pending') return <Preloader />;

  return (
    <form onSubmit={sendMessageHandler} className={classes.form}>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        className={classes.input}
      />
      <button disabled={status !== 'ready'} className={classes.button}>
        Отправить
      </button>
    </form>
  );
};
