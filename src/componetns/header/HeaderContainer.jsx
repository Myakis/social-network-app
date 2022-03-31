import React from 'react';
import { connect } from 'react-redux';
import { setAutnUSerData } from '../../redux/auth-reducer';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.profile.profile ? state.profile.profile.fullName : state.auth.login,
  profile: state.auth.profile,
  photo: state.auth.iconAvatar ? state.auth.iconAvatar : null,
});
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} photo={this.props.photo} />;
  }
}
export default connect(mapStateToProps, { setAutnUSerData, logout })(HeaderContainer);
