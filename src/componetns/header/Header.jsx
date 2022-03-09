import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src='https://frontandrew.ru/img/logo.svg' alt='logo' />
    </header>
  );
};

export default Header;
