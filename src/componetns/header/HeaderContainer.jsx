import React from 'react';
import { connect } from 'react-redux';
import { userAPI } from '../../api';
import { setAutnUSerData } from '../../redux/auth-reducer';
import { getProfile, setUserProfile } from '../../redux/profile-reducer';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.auth.profile,
});
class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.setAuth().then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAutnUSerData(id, login, email);

        this.props.getProfile(id);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
export default connect(mapStateToProps, { setAutnUSerData, setUserProfile, getProfile })(HeaderContainer);
