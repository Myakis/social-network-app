import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import ProfilePage from './ProfilPage';
import { setUserProfile } from '../../redux/profile-reducer';
import widthRouter from './CustomWitdhRouter';

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = '2';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <ProfilePage {...this.props} />;
  }
}

let WidthRouterProfileContainer = widthRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WidthRouterProfileContainer);
