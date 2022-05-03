import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootStateType } from '../../redux/store-redux';

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};
// interface IProps {
//   isAuth: boolean;
// }

export function withAuthRedirect(Component) {
  function RedirectComponent(props) {
    if (!props.isAuth) return <Navigate to={'/login'} />;
    return <Component {...props} />;
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}
