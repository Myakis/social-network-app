import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import React from 'react';
import Preloader from '../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = props => {
  return (
    <div className={classes.list}>
      {props.isFetching ? <Preloader /> : ''}
      {props.users.map((u, i) => (
        <div key={i} className={classes.item}>
          <div className={classes.profile}>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small ? u.photos.small : avatarPhoto} alt='avatar' />
            </NavLink>
            {u.followed ? (
              <button
                disabled={props.isFollowing.some(id => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}>
                Подписан
              </button>
            ) : (
              <button
                disabled={props.isFollowing.some(id => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}>
                Подписаться
              </button>
            )}
          </div>
          <div className={classes.info}>
            <div className={classes.name}>{u.name}</div>
            <p>{'u.location.country'}</p>
            <p>{'u.location.cityName'}</p>
          </div>
        </div>
      ))}
      <div className={classes.paginatonPage}>
        {props.numbersPage.map((count, i) => {
          return (
            <span
              key={i}
              onClick={() => props.changePage(count)}
              className={props.currentPage === count ? classes.activePage : ''}>
              {count}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Users;
