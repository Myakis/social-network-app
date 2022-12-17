import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootStateType } from '../redux/store';

const mapStateToProps = (state: RootStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component: React.ComponentType) => {
  const RedirectComponent: FC<any> = props => {
    return props.isAuth ? <Component {...props} /> : <Navigate to={'/login'} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};

