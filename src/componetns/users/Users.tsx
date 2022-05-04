import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import LoaderUser from '../utils/LoaderUser/LoaderUser';
import FormSearchUsers from './FormSearchUsers';
import { filterType, follow, getsUsers, unFollow } from '../../redux/reducer/user-reducer';
import {
  getCurrentPageSelector,
  getFetchSelector,
  getFollowSelector,
  getTotalUsersCountSelector,
  getUsersCountSelector,
  getUsersFilter,
  getUsersSelector,
} from '../../redux/user-selector';

const Users: FC = React.memo(() => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  const isFetching = useSelector(getFetchSelector);
  const usersCount = useSelector(getUsersCountSelector);
  const filter = useSelector(getUsersFilter);
  const currentPage = useSelector(getCurrentPageSelector);
  const totalItemsCount = useSelector(getTotalUsersCountSelector);
  const isFollowing = useSelector(getFollowSelector);

  useEffect(() => {
    dispatch(getsUsers(currentPage, usersCount, filter));
  }, []);

  const changePage = (pageNum: number) => {
    dispatch(getsUsers(pageNum, usersCount, filter));
  };

  const onFilter = (filter: filterType) => {
    dispatch(getsUsers(1, usersCount, filter));
  };
  const followSubscribe = (id: number) => {
    dispatch(follow(id));
  };
  const unFollowSubscribe = (id: number) => {
    dispatch(unFollow(id));
  };

  return (
    <div className={classes.list}>
      {/* Загрузка страницы */}
      <FormSearchUsers onFilter={onFilter} />
      {isFetching &&
        Array(6)
          .fill('')
          .map((item, index) => <LoaderUser key={index} />)}

      {/* Перебор всех пользователей и отображение по шаблону */}
      {!isFetching &&
        users.map(u => (
          <div key={u.id} className={classes.item}>
            <User
              user={u}
              isFollowing={isFollowing}
              follow={followSubscribe}
              unFollow={unFollowSubscribe}
              status={u.status}
            />
          </div>
        ))}

      {/* Постраничная пагинация */}
      <Paginator
        loading={isFetching}
        usersCount={usersCount}
        totalItemsCount={totalItemsCount}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
});
export default Users;
