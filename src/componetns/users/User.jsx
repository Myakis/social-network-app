import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({ user, follow, unFollow, isFollowing, status }) => {
  return (
    <>
      <div className={classes.profile}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small ? user.photos.small : avatarPhoto} alt='avatar' />
        </NavLink>
        {user.followed ? (
          <button
            disabled={isFollowing.some(id => id === user.id)}
            onClick={() => {
              unFollow(user.id);
            }}>
            Подписан
          </button>
        ) : (
          <button
            disabled={isFollowing.some(id => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}>
            Подписаться
          </button>
        )}
      </div>
      <div className={classes.info}>
        <div className={classes.name}>{user.name}</div>

        {status ? <p>{status}</p> : <p>{'ЗАГЛУШКА СТАТУСА'}</p>}
      </div>
    </>
  );
};
export default User;
