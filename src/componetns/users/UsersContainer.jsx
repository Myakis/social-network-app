import { connect } from 'react-redux';
import React from 'react';
import { follow, unFollow, setCurrentPage, toggleFollowingProgressive, getsUsers } from '../../redux/user-reducer';
import Users from './Users';

class UsersComponent extends React.Component {
  componentDidMount() {
    // this.props.setFetching(true);
    // userAPI.getUser(this.props.currentPage, this.props.usersCount).then(response => {
    //   this.props.setFetching(false);
    //   this.props.setUsers(response.data.items);
    //   this.props.setTotalCount(response.data.totalCount);
    // });
    this.props.getsUsers(this.props.currentPage, this.props.usersCount);
  }

  changePage = pageNum => {
    this.props.getsUsers(pageNum, this.props.usersCount);

    // this.props.setCurrentPage(pageNum);
    // this.props.setFetching(true);

    // userAPI.getUser(pageNum, this.props.usersCount).then(response => {
    //   this.props.setFetching(false);
    //   this.props.setUsers(response.data.items);
    // });
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
    users: state.users.users,
    usersCount: state.users.usersCount,
    currentPage: state.users.currentPage,
    totalUsersCount: state.users.totalUsersCount,
    isFetching: state.users.ifFetching,
    isFollowing: state.users.isFollowing,
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

let UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgressive,
  getsUsers,
})(UsersComponent);
export default UsersContainer;
