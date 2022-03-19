import { connect } from 'react-redux';
import React from 'react';
import { follow, unFollow, setCurrentPage, toggleFollowingProgressive, getsUsers } from '../../redux/user-reducer';
import Users from './Users';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getCurrentPageSelector,
  getFollowSelector,
  getTotalUsersCountSelector,
  getUsersCountSelector,
  getUsersSelector,
  getFethSelector,
} from '../../redux/user-selector';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getsUsers(this.props.currentPage, this.props.usersCount);
  }

  changePage = pageNum => {
    this.props.getsUsers(pageNum, this.props.usersCount);
  };

  render() {
    let countPage = Math.ceil(this.props.totalUsersCount / this.props.usersCount);
    let numbersPage = [];
    for (let i = 1; i <= countPage; i++) {
      numbersPage.push(i);
      if (i > 10) {
        break;
      }
    }

    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        changePage={this.changePage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        numbersPage={numbersPage}
        isFetching={this.props.isFetching}
        isFollowing={this.props.isFollowing}
        toggleFollowingProgressive={this.props.toggleFollowingProgressive}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: getUsersSelector(state),
    usersCount: getUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isFetching: getFethSelector(state),
    isFollowing: getFollowSelector(state),
  };
};
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

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgressive,
    getsUsers,
  }),
  withAuthRedirect
)(UsersComponent);
