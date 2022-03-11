import classes from './../Messages.module.css';

const Message = props => {
  return <div className={`${classes.message} ${props.user ? classes.me : 'fff'}`}>{props.message}</div>;
};

export default Message;
