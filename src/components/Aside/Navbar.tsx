import { NavLink } from 'react-router-dom';

import { SvgChat, SvgDialogs, SvgNews, SvgProfile, SvgUsers } from '../svg/SvgComponents';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={classes.navigation}>
      <nav>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/profile'>
              <span> Профиль</span>
              <SvgProfile />
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/news'>
              <span> Новости</span>
              <SvgNews />
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/messages'>
              <span> Сообщения </span>
              <SvgDialogs />
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/chat'>
              <span> Общий чат</span>
              <SvgChat />
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/users'>
              <span> Пользователи</span>
              <SvgUsers />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
