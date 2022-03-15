import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import avatar from '../../assets/img/avatar.png';

const Header = props => {
  console.log(props);
  return (
    <header className={classes.header}>
      <img src='https://frontandrew.ru/img/logo.svg' alt='logo' />

      <div className={classes.profileWrapper}>
        {props.isAuth ? (
          <NavLink to={'/profile'}>
            <div className={classes.profile}>
              <img src={props.profile.photos.small ? props.profile.photos.small : avatar} alt='avatatr' />
              <p>{props.login}</p>
            </div>
          </NavLink>
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
