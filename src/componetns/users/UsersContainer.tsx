import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgressive,
  getsUsers,
} from '../../redux/reducer/user-reducer';
import Users from './Users';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {
  getCurrentPageSelector,
  getFollowSelector,
  getTotalUsersCountSelector,
  getUsersCountSelector,
  getUsersSelector,
  getFethSelector,
} from '../../redux/user-selector';
import { AppRootReducerType } from '../../redux/store-redux';
import { UserType } from '../../types/reducers-types';

const mapStateToProps = (state: AppRootReducerType): MapStateToPropsState => {
  return {
    users: getUsersSelector(state),
    usersCount: getUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isFetching: getFethSelector(state),
    isFollowing: getFollowSelector(state),
  };
};

const connector = connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgressive,
  getsUsers,
});

interface MapStateToPropsState {
  currentPage: number;
  usersCount: number;
  totalUsersCount: number;
  isFetching: boolean;
  isFollowing: Array<number>;
  users: UserType[];
}

// interface MapDispatchToPropsState {
//   follow: (id: number) => void;
//   unFollow: (id: number) => void;
//   getsUsers: (pageNumber: number, userCount: number) => void;
// }

interface PropsType extends PropsFromRedux {}

class UsersComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getsUsers(this.props.currentPage, this.props.usersCount);
  }
  changePage = (pageNum: number) => {
    this.props.getsUsers(pageNum, this.props.usersCount);
  };

  render() {
    return (
      <Users
        totalItemsCount={this.props.totalUsersCount}
        usersCount={this.props.usersCount}
        users={this.props.users}
        currentPage={this.props.currentPage}
        changePage={this.changePage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        isFetching={this.props.isFetching}
        isFollowing={this.props.isFollowing}
        // toggleFollowingProgressive={this.props.toggleFollowingProgressive}
      />
    );
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

export default compose<any>(connector, withAuthRedirect)(UsersComponent);

// const mapDispatchToProps = dispatch => {
//   return {
//     toFollow: userId => {
//       let action = followActionCreateor(userId);
//       dispatch(action);
//     },
//     toUnFollow: userId => {
//       let action = unfollowActionCreateor(userId);
//       dispatch(action);
//     },
//     setUsers: userId => {
//       let action = setUsersActionCreateor(userId);
//       dispatch(action);
//     },
//     setCurrentPage: current => {
//       let action = setCurrentPageActionCreator(current);
//       dispatch(action);
//     },
//     setTotalCount: total => {
//       let action = setTotalCountActionCreator(total);
//       dispatch(action);
//     },
//     setFetching: load => {
//       let action = setFetching(load);
//       dispatch(action);
//     },
//   };
// };

// let widthRedirectComponent = withAuthRedirect(UsersComponent);

// let UsersContainer = connect(mapStateToProps, {
//   follow,
//   unFollow,
//   setCurrentPage,
//   toggleFollowingProgressive,
//   getsUsers,
// })(widthRedirectComponent);
// export default UsersContainer;
