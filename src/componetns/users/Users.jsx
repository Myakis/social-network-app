import classes from './Users.module.css';
import React from 'react';
import Preloader from '../common/preloader/Preloader';
import User from './User';
import Paginator from '../common/Paginator/Paginator';

const Users = props => {
  return (
    <div className={classes.list}>
      {/* Загрузка страницы */}
      {props.isFetching ? <Preloader /> : ''}
      {/* Перебор всех пользователей и отображение по шаблону */}
      {props.users.map((u, i) => (
        <div className={classes.item}>
          <User key={u.id} user={u} isFollowing={props.isFollowing} follow={props.follow} unFollow={props.unFollow} />
        </div>
      ))}

      {/* Постраничная пагинация */}
      <Paginator numbersPage={props.numbersPage} currentPage={props.currentPage} changePage={props.changePage} />
    </div>
  );
};
export default Users;
