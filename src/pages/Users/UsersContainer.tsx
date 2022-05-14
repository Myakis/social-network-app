import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import Users from './Users';

import {
  follow,
  unFollow,
  UserActions,
  getsUsers,
  filterType,
} from '../../redux/reducer/user-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getCurrentPageSelector,
  getFollowSelector,
  getTotalUsersCountSelector,
  getUsersCountSelector,
  getUsersSelector,
  getFetchSelector,
  getUsersFilter,
} from '../../redux/selectors/user-selector';
import { RootStateType } from '../../redux/store-redux';
import { UserType } from '../../types/reducers-types';
const { setCurrentPage, toggleFollowingProgressive } = UserActions;

const mapStateToProps = (state: RootStateType): MapStateToProps => {
  return {
    users: getUsersSelector(state),
    usersCount: getUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isFetching: getFetchSelector(state),
    isFollowing: getFollowSelector(state),
    filter: getUsersFilter(state),
  };
};

const connector = connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgressive,
  getsUsers,
});

interface MapStateToProps {
  currentPage: number;
  usersCount: number;
  totalUsersCount: number;
  isFetching: boolean;
  isFollowing: Array<number>;
  users: UserType[];
  filter: filterType;
}

interface PropsType extends PropsFromRedux {}

class UsersComponent extends React.Component<PropsType> {
  render() {
    return <Users />;
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

export default compose<any>(connector, withAuthRedirect)(UsersComponent);
