import { connect } from 'react-redux';
import {
  followActionCreateor,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreateor,
  unfollowActionCreateor,
} from '../../redux/user-reducer';
import Users from './Users';

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
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
