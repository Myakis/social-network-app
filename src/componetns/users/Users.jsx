import React from 'react';

import classes from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import LoaderUser from '../utils/LoaderUser/LoaderUser';

const Users = props => {
  return (
    <div className={classes.list}>
      {/* Загрузка страницы */}

      {props.isFetching &&
        Array(6)
          .fill('')
          .map((item, index) => <LoaderUser key={index} />)}

      {/* Перебор всех пользователей и отображение по шаблону */}
      {!props.isFetching &&
        props.users.map(u => (
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
