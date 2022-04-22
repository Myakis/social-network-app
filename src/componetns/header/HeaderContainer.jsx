import React from 'react';
import { connect } from 'react-redux';
import { setAutnUSerData, logout } from '../../redux/reducer/auth-reducer.ts';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.userName,
  profile: state.auth.profile,
  photo: state.auth.iconAvatar ? state.auth.iconAvatar : null,
});
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} photo={this.props.photo} />;
  }
}
export default connect(mapStateToProps, { setAutnUSerData, logout })(HeaderContainer);
