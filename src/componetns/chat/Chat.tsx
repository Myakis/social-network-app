import React, { FC, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

import {
  actions,
  startMessagesListening,
  stoptMessagesListening,
} from '../../redux/reducer/chat-reducer';
import { RootStateType } from '../../redux/store-redux';
import classes from '../messages/Messages.module.css';
import { Message, SendMessageForm } from './messages/MessagesListComponents';

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
  const dispatch = useDispatch();
  const messages = useSelector((state: RootStateType) => state.chat.messages);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ rootMargin: '10px', threshold: 0 });

  useEffect(() => {
    if (inView) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (messages.length !== 0) {
      dispatch(actions.statusChanged('ready'));
    }
  }, [messages]);

  return (
    <div>
      {messages.map((m, i) => (
        <Message {...m} key={m.id} />
      ))}
      <div ref={messagesAnchorRef}>
        <div ref={ref}></div>
      </div>
    </div>
  );
});
