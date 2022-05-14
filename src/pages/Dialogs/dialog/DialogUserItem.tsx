import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './../Messages.module.css';

interface IProps {
  name: string;
  id: number;
}
const Dialog: FC<IProps> = props => {
  const dispatch = useDispatch();
  return (
    <div className={classes.item}>
      <NavLink
        className={link => (link.isActive ? classes.active : '') + ' ' + classes.user}
        to={'' + props.id}>
        <div className={classes.avatar}>
          <img
            src='https://i.pinimg.com/236x/a9/bb/b4/a9bbb43d833e264c66fce9f8d62601bb.jpg'
            alt='avatar'
          />
        </div>
        <div className={classes.userInfo}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.last__message}>последнее сообщение</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Dialog;
