import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={classes.navigation}>
      <nav>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/profile'>
              Профиль
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/messages'>
              Сообщения
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/music'>
              Музыка
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/news'>
              Новости
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='setting'>
              Настройки
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
