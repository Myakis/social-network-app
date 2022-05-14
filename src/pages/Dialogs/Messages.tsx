import { FormApi } from 'final-form';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import Preloader from '../../components/common/preloader/Preloader';

import { dialogActions, getDialogs, sendMessageDialog } from '../../redux/reducer/dialog-reducer';
import { RootStateType } from '../../redux/store-redux';
import { useAppSelector } from '../../types/reducers-types';
import Dialog from './dialog/UserDialog';
import Message from './message/Message';
import classes from './Messages.module.css';
import styles from './Messages.module.css';

interface IProps {
  state: RootStateType;
  addMessage: (text: string) => void;
}

const Messages: FC<IProps> = React.memo(props => {
  const isPending = useAppSelector(state => state.dialog.pendingUsers);
  const isPendingMessage = useAppSelector(state => state.dialog.pendingMessage);
  const listMessage = useAppSelector(state => state.dialog.messages);
  const lastDialogsID = useAppSelector(state => state.dialog.firstUser);
  const listUser = useAppSelector(state => state.dialog.users);
  const [firstVisible, setFirstVisible] = useState(true);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const { ref, inView } = useInView({ rootMargin: '10px', threshold: 0 });
  const dispatch = useDispatch();
  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getDialogs());
    if (lastDialogsID) {
      setSelectedUser(lastDialogsID);
    }
  }, []);
  useEffect(() => {
    if (inView) {
      if (firstVisible) {
        messagesAnchorRef.current?.scrollIntoView();
        setSelectedUser(lastDialogsID);
        setFirstVisible(false);
      } else {
        messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [listMessage]);

  const addMessage = (messageText: string) => {};

  if (isPending) return <Preloader />;
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogs}>
        {/* Отображение списка пользователей, с кем есть переписка */}
        {listUser.map(item => (
          <Dialog
            key={item.id}
            selected={selectedUser}
            setSelected={setSelectedUser}
            name={item.userName}
            id={item.id}
            photo={item.photos.small}
            newMessage={item.newMessagesCount}
          />
        ))}
      </div>
      {isPendingMessage && <Preloader />}
      <div className={classes.dialogWindow}>
        <div className={classes.dialogWindow}>
          <div className={classes.list}>
            {/* Отображение сообщений */}
            {listMessage.length === 0 && (
              <div className={classes.chatEmpty}>
                <div>Выберите чат</div>
              </div>
            )}
            <div>
              {listMessage.map(m => (
                <Message key={m.id} id={m.senderId} message={m.body} />
              ))}
              <div ref={messagesAnchorRef}>
                <div ref={ref}></div>
              </div>
            </div>
          </div>
          {selectedUser && <FieldMessageForm addMessage={addMessage} id={selectedUser} />}
        </div>
      </div>
    </div>
  );
});

interface IForm {
  message: string;
}

interface IFieldMessageForm {
  addMessage?: (message: string) => void;
  id: number;
}
export const FieldMessageForm: FC<IFieldMessageForm> = ({ id }) => {
  const dispatch = useDispatch();
  const onSubmit = (data: IForm, e: any) => {
    dispatch(sendMessageDialog(id, data.message));
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
