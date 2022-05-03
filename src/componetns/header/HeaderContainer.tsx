import React from 'react';
import { connect } from 'react-redux';

import { actions, logout } from '../../redux/reducer/auth-reducer';
import { RootStateType } from '../../redux/store-redux';
import { ProfileType } from '../../types/reducers-types';
import Header from './Header';
const setAuthUserData = actions.setAuthUSerData;

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.userName,
  profile: state.auth.profile,
  photo: state.auth.iconAvatar,
});
interface IProps {
  isAuth: boolean | null;
  login: string | null;
  profile: ProfileType | null;
  photo: string | null;

  logout: () => void;
}

type DispatchType = {};

class HeaderContainer extends React.Component<IProps & DispatchType> {
  render() {
    return <Header {...this.props} photo={this.props.photo} />;
  }
}
export default connect(mapStateToProps, { setAuthUserData, logout })(HeaderContainer);
