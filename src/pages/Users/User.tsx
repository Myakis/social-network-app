import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import { UserType } from '../../types/reducers-types';
import { RootStateType } from '../../redux/store-redux';
import { SvgDelete, SvgUserPlus } from '../../components/svg/SvgComponents';
import { follow, unFollow } from '../../redux/reducer/user-reducer';

interface UserPropsType {
  user: UserType;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  isFollowing: Array<number>;
  status: string;
}

const User: FC<UserPropsType> = ({ user, follow, unFollow, isFollowing, status }) => {
  const myId = useSelector((state: RootStateType) => state.auth.userId);
  return (
    <>
      <div className={classes.profile}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small ? user.photos.small : avatarPhoto} alt='avatar' />
        </NavLink>
        {myId! == user.id ? (
          <NavLink to={'/profile/' + user.id}>
            <button disabled={isFollowing.some(id => id === user.id)}>Мой профиль</button>
          </NavLink>
        ) : user.followed ? (
          <UnfollowButton user={user} isFollowing={isFollowing} />
        ) : (
          <FollowButton user={user} isFollowing={isFollowing} />
        )}
      </div>
      <div className={classes.info}>
        <NavLink to={'/profile/' + user.id}>
          <div className={classes.name}>{user.name}</div>
        </NavLink>
        {status ? <p>{status}</p> : <p>{''}</p>}
      </div>
    </>
  );
};
export default User;

export const FollowButton: FC<IButtonSubscribe> = ({ user, isFollowing }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={classes.follow}
      disabled={isFollowing.some(id => id === user.id)}
      onClick={() => {
        dispatch(follow(user.id));
      }}>
      <span className={classes.icon}>
        <SvgUserPlus />
      </span>
      Подписаться
    </button>
  );
};
export const UnfollowButton: FC<IButtonSubscribe> = ({ user, isFollowing }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={classes.unfollow}
      disabled={isFollowing.some(id => id === user.id)}
      onClick={() => {
        dispatch(unFollow(user.id));
      }}>
      <span className={classes.icon}>
        <SvgDelete />{' '}
      </span>
      Отписаться
    </button>
  );
};

interface IButtonSubscribe {
  user: UserType;
  isFollowing: Array<number>;
}
