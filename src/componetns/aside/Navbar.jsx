import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={classes.navigation}>
      <nav>
        <ul className={classes.list}>
          <li className={`${classes.item} ${classes.active}`}>
            <a href=''> Профиль</a>
          </li>
          <li className={classes.item}>
            <a href=''> Сообщения</a>
          </li>
          <li className={classes.item}>
            <a href=''> Музыка</a>
          </li>
          <li className={classes.item}>
            <a href=''> Новости</a>
          </li>{' '}
          <li className={classes.item}>
            <a href=''> Настройка</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
