import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilPage';
import { getStatus, setUserProfile, updateUserStatus } from '../../redux/profile-reducer';
import widthRouter from './CustomWitdhRouter';
import { isAuthorization } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { userAPI } from '../../api';
const mapStateToProps = state => ({
  profile: state.profile.profile,
  status: state.profile.status,
});

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = '22851';
    }
    this.props.getStatus(userId);

    userAPI.getProfile(userId).then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <ProfilePage {...this.props} />;
  }
}

export default compose(
  connect(mapStateToProps, { setUserProfile, isAuthorization, getStatus, updateUserStatus }),
  widthRouter,
  withAuthRedirect
)(ProfileContainer);
