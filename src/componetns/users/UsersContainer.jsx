import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import {
  followActionCreateor,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreateor,
  unfollowActionCreateor,
} from '../../redux/user-reducer';
import Users from './Users';

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`)
      .then(respose => {
        this.props.setUsers(respose.data.items);
        this.props.setTotalCount(respose.data.totalCount);
      });
  }
  changePage = p => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersCount}`).then(respose => {
      this.props.setUsers(respose.data.items);
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
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toFollow: userId => {
      let action = followActionCreateor(userId);
      dispatch(action);
    },
    toUnFollow: userId => {
      let action = unfollowActionCreateor(userId);
      dispatch(action);
    },
    setUsers: userId => {
      let action = setUsersActionCreateor(userId);
      dispatch(action);
    },
    setCurrentPage: current => {
      let action = setCurrentPageActionCreator(current);
      dispatch(action);
    },
    setTotalCount: total => {
      let action = setTotalCountActionCreator(total);
      dispatch(action);
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
export default UsersContainer;