import { connect } from 'react-redux';
import { followActionCreateor, setUsersActionCreateor, unfollowActionCreateor } from '../../redux/user-reducer';
import Users from './Users';

const mapStateToProps = state => {
  return { users: state.users.users };
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
  };
};
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
