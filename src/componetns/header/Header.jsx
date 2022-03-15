import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = props => {
  return (
    <header className={classes.header}>
      <img src='https://frontandrew.ru/img/logo.svg' alt='logo' />

      <div className={classes.profile}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink onClick={props.setAutnUSerData} to={'/login'}>
            Войти
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
