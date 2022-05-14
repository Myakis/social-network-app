import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import avatar from '../../../assets/img/avatar.png';
import { dialogActions, getListMessages } from '../../../redux/reducer/dialog-reducer';
import classes from './../Messages.module.css';

interface IProps {
  id: number;
  photo: string | null;
  name: string;
  selected: number | null;
  setSelected: (id: number) => void;
  newMessage: number;
}

const Dialog: FC<IProps> = React.memo(props => {
  const dispatch = useDispatch();
  const userHandler = () => {
    dispatch(getListMessages(props.id));
    dispatch(dialogActions.lastDialogs(props.id));
    props.setSelected(props.id);
  };

  return (
    <div className={classes.item} onClick={userHandler}>
      <div className={cn({ [classes.active]: props.id === props.selected }, classes.body)}>
        <div className={classes.avatar}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.photo ? props.photo : avatar} alt='avatar' />
          </NavLink>
          {props.newMessage > 0 && <span>{props.newMessage}</span>}
        </div>
        <div className={classes.userInfo}>
          <div className={classes.name}>{props.name}</div>
        </div>
      </div>
    </div>
  );
});

export default Dialog;
