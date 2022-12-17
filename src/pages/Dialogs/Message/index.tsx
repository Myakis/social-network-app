import { FC } from 'react';
import { useAppSelector } from '../../../types/reducers-types';
import classes from './../Messages.module.css';

interface IProps {
  message: string;
  id: number;
}
const Message: FC<IProps> = props => {
  const userMe = useAppSelector(state => state.auth.userId);

  return (
    <div className={`${classes.message} ${userMe === props.id ? classes.me : ''}`}>
      {props.message}
    </div>
  );
};

export default Message;
