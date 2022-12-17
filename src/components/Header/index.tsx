import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from 'images/svg/logo.svg';
import classes from './Header.module.css';
import avatar from 'images/avatar.png';
import { SvgHeader } from './components/Icon';
import { useAppSelector } from 'types/reducers-types';
import { logout } from 'redux/reducer/auth';

const Header: FC = () => {
  const dispatch = useDispatch();
  const photo = useAppSelector(state => state.auth.iconAvatar);
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const login = useAppSelector(state => state.auth.userName);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to={'/profile'}>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>

      <div className={classes.profileWrapper}>
        {isAuth ? (
          <div className={classes.profileBody}>
            <NavLink to={'/profile'}>
              <div className={classes.profile}>
                <img src={photo || avatar} alt='avatatr' />
                <p>{login}</p>
              </div>
            </NavLink>
            <NavLink onClick={logoutHandler} className={classes.logout} to={'/login'}>
              <span> Выйти</span>
              <SvgHeader />
            </NavLink>
          </div>
        ) : (
          <NavLink to={'/login'}>Войти</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
