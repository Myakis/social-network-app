import classes from './Login.module.css';

export const Login = props => {
  return (
    <div>
      <h1>Вход</h1>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  return (
    <form className={classes.form} action=''>
      <div className={classes.inputWrap}>
        <input type='text' placeholder='Логин' />
      </div>{' '}
      <div className={classes.inputWrap}>
        <input type='password' placeholder='Пароль' />
      </div>{' '}
      <label className={classes.inputWrap}>
        <input type='checkbox' />
        Замомнить меня
      </label>
      <div className={classes.inputWrap}>
        <button type='submit'> Войти</button>
      </div>
    </form>
  );
};
