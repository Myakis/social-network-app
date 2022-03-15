import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import ProfilePage from './ProfilPage';
import { setUserProfile } from '../../redux/profile-reducer';

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />;
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
