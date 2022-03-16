import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import ProfilePage from './ProfilPage';
import { setUserProfile } from '../../redux/profile-reducer';
import widthRouter from './CustomWitdhRouter';
import { isAuthorization } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = '22851';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <ProfilePage {...this.props} />;
  }
}

export default compose(
  connect(mapStateToProps, { setUserProfile, isAuthorization }),
  widthRouter,
  withAuthRedirect
)(ProfileContainer);

// let WidthRouterProfileContainer = widthRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUserProfile, isAuthorization })(WidthRouterProfileContainer);
