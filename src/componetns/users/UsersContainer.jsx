import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import { follow, unfollow, setCurrentPage, setFetching, setTotalCount, setUsers } from '../../redux/user-reducer';
import Users from './Users';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`, {
        withCredentials: true,
      })
      .then(response => {
        this.props.setFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  changePage = p => {
    this.props.setCurrentPage(p);
    this.props.setFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersCount}`, {
        withCredentials: true,
      })
      .then(response => {
        this.props.setFetching(false);
        this.props.setUsers(response.data.items);
      });
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
        toFollow={this.props.toFollow}
        toUnFollow={this.props.toUnFollow}
        numbersPage={numbersPage}
        isFetching={this.props.isFetching}
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
  toFollow: follow,
  toUnFollow: unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setFetching,
})(UsersComponent);
export default UsersContainer;
