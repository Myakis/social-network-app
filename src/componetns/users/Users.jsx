import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import React from 'react';
import Preloader from '../common/preloader/Preloader';

const Users = props => {
  return (
    <div className={classes.list}>
      {props.isFetching ? <Preloader /> : ''}
      {props.users.map((u, i) => (
        <div key={i} className={classes.item}>
          <div className={classes.profile}>
            <img src={u.photos.small ? u.photos.small : avatarPhoto} alt='avatar' />
            {u.followed ? (
              <button
                onClick={() => {
                  props.toUnFollow(u.id);
                }}>
                У вас в друзьях
              </button>
            ) : (
              <button
                onClick={() => {
                  props.toFollow(u.id);
                }}>
                Добавить в друзья
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
