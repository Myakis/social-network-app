import React from 'react';

import classes from './Users.module.css';
import Preloader from '../common/preloader/Preloader';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import LoaderUser from '../utils/LoaderUser/LoaderUser';

const Users = props => {
  if (props.isFetching) {
    return (
      <div className={classes.list}>
        {Array(6)
          .fill('')
          .map((item, index) => (
            <LoaderUser key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className={classes.list}>
      {/* Загрузка страницы */}

      {/* Перебор всех пользователей и отображение по шаблону */}
      {props.users.map(u => (
        <div key={u.id} className={classes.item}>
          <User
            user={u}
            isFollowing={props.isFollowing}
            follow={props.follow}
            unFollow={props.unFollow}
            status={u.status}
          />
        </div>
      ))}

      {/* Постраничная пагинация */}
      <Paginator
        loading={props.isFetching}
        usersCount={props.usersCount}
        totalItemsCount={props.totalItemsCount}
        currentPage={props.currentPage}
        changePage={props.changePage}
      />
    </div>
  );
};
export default Users;
