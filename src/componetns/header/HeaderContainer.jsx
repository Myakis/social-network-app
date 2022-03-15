import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAutnUSerData } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.auth.profile,
});

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAutnUSerData(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}
export default connect(mapStateToProps, { setAutnUSerData })(HeaderContainer);
