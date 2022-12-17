import React, {useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'redux/store';

import {
  startMessagesListening,
  stoptMessagesListening,
} from '../../redux/reducer/chat';
import classes from '../Dialogs/Messages.module.css';
import { Message, SendMessageForm } from './Messages';

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stoptMessagesListening());
    };
  }, []);

  return (
    <div>
      <div className={classes.dialogWindow}>
        <div className={classes.list}>
          <Messages />
        </div>
        <SendMessageForm />
      </div>
    </div>
  );
};

export default Chat;

export const Messages = React.memo(() => {
  const [firstVisible, setFirstVisible] = useState(true);
  const messages = useSelector((state: RootStateType) => state.chat.messages);
  const status = useSelector((state: RootStateType) => state.chat.status);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ rootMargin: '10px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      if (firstVisible) {
        messagesAnchorRef.current?.scrollIntoView();
        setFirstVisible(false);
      } else {
        messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [messages]);

  if (messages.length === 0 && status === 'ready') {
    return (
      <div className={classes.noMessage}>
        <span>Нет сообщений</span>{' '}
      </div>
    );
  }
  return (
    <div>
      {messages.map((m) => (
        <Message {...m} key={m.id} />
      ))}
      <div ref={messagesAnchorRef}>
        <div ref={ref}></div>
      </div>
    </div>
  );
});
