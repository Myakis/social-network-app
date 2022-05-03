import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootStateType } from '../../redux/store-redux';

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = Component => {
  function RedirectComponent(props) {
    return props.isAuth ? <Component {...props} /> : <Navigate to={'/login'} />;
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
