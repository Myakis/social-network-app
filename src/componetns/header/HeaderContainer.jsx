import React from 'react';
import { connect } from 'react-redux';
import { isAuthorization, setAutnUSerData } from '../../redux/auth-reducer';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.auth.profile,
});
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.isAuthorization();
  }
  render() {
    return <Header {...this.props} />;
  }
}
export default connect(mapStateToProps, { setAutnUSerData, isAuthorization, logout })(HeaderContainer);
