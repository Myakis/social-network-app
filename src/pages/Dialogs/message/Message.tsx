import { FC } from 'react';
import classes from './../Messages.module.css';

interface IProps {
  message: string;
  user: string | undefined;
  id: number;
}
const Message: FC<IProps> = props => {
  return (
    <div className={`${classes.message} ${props.user ? classes.me : ''}`}>{props.message}</div>
  );
};

export default Message;
