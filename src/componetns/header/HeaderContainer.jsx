import React from 'react';
import { connect } from 'react-redux';
import { setAutnUSerData } from '../../redux/auth-reducer';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  photo: state.profile.profile ? state.profile.profile.photos.small : null,
});
class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.profile !== prevProps.profile) {
    }
  }
  render() {
    return <Header {...this.props} photo={this.props.photo} />;
  }
}
export default connect(mapStateToProps, { setAutnUSerData, logout })(HeaderContainer);
