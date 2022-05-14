import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString, { ParsedQuery } from 'query-string';

import classes from './Users.module.css';
import User from './User';
import Paginator from '../../components/common/Paginator/Paginator';
import LoaderUser from '../../components/utils/LoaderUser/LoaderUser';
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
} from '../../redux/selectors/user-selector';

type IQuery = {
  term?: string;
  page?: string;
  friend?: string;
};

const Users: FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const users = useSelector(getUsersSelector);
  const isFetching = useSelector(getFetchSelector);
  const usersCount = useSelector(getUsersCountSelector);
  const filter = useSelector(getUsersFilter);
  const currentPage = useSelector(getCurrentPageSelector);
  const totalItemsCount = useSelector(getTotalUsersCountSelector);
  const isFollowing = useSelector(getFollowSelector);

  useEffect(() => {
    const value = queryString.parse(location.search) as IQuery;
    let actualPage = currentPage;
    let actualFilter = filter;
    if (!!value.page) actualPage = +value.page;
    if (!!value.term) actualFilter = { ...actualFilter, term: value.term };
    if (!!value.friend)
      actualFilter = {
        ...actualFilter,
        friend: value.friend === 'null' ? null : value.friend === 'true' ? true : false,
      };

    dispatch(getsUsers(actualPage, usersCount, actualFilter));
  }, []);

  useEffect(() => {
    const query: IQuery = {};
    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);
    navigate('?' + queryString.stringify(query));
  }, [usersCount, currentPage, filter]);

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
      <div>
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
      </div>
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
