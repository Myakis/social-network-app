import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfilePage from './ProfilPage';
import { getStatus, setUserProfile, updateUserStatus } from '../../redux/profile-reducer';
import widthRouter from './CustomWitdhRouter';
import { isAuthorization } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { userAPI } from '../../api';
import { useParams } from 'react-router-dom';

const mapStateToProps = state => ({
  profile: state.profile.profile,
  status: state.profile.status,
  userId: state.auth.userId,
});

const ProfileContainer = props => {
  const { id } = useParams();
  const [loadProfile, setLoadProfile] = useState(false);

  useEffect(() => {
    let userId = id;
    if (!userId) {
      userId = props.userId;
    }
    props.getStatus(userId);
    setLoadProfile(false);
    userAPI.getProfile(userId).then(response => {
      props.setUserProfile(response.data);
      setLoadProfile(true);
    });
  }, [id]);

  return <ProfilePage {...props} loadProfile={loadProfile} />;
};

//!!РЕАЛИЦИЯ ЧЕРЕЗ КЛАССОВУЮ КОМПОНЕНТУ
// class ProfileContainer extends React.Component {
//   refreshProfile() {
//     let userId = this.props.params.id;
//     if (!userId) {
//       userId = this.props.userId;
//     }
//     this.props.getStatus(userId);

//     userAPI.getProfile(userId).then(response => {
//       this.props.setUserProfile(response.data);
//     });
//   }

//   componentDidMount() {
//     this.refreshProfile();
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // Если Id из текущих props != Id из прошлых props, меняем
//     if (this.props.params.id !== prevProps.params.id) {
//       this.refreshProfile();
//     }
//   }

//   render() {
//     return <ProfilePage {...this.props} />;
//   }
// }

export default compose(
  connect(mapStateToProps, { setUserProfile, isAuthorization, getStatus, updateUserStatus }),
  withAuthRedirect
)(ProfileContainer);
