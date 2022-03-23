import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import avatar from '../../assets/img/avatar.png';

const Header = ({ photo, ...props }) => {
  return (
    <header className={classes.header}>
      <img src='https://frontandrew.ru/img/logo.svg' alt='logo' />

      <div className={classes.profileWrapper}>
        {props.isAuth ? (
          <div className={classes.profileBody}>
            <NavLink to={'/profile'}>
              <div className={classes.profile}>
                <img src={photo || avatar} alt='avatatr' />
                <p>{props.login}</p>
              </div>
            </NavLink>
            <NavLink className={classes.logout} to={'/login'} onClick={props.logout}>
              Выйти
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
