import classes from './Login.module.css';
import { Form, Field } from 'react-final-form';
import React from 'react';

export const Login = props => {
  return (
    <div>
      <h1>Вход</h1>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  const onSubmit = data => {};
  const validate = data => {};
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form} action=''>
          <div className={classes.inputWrap}>
            <Field name={'login'} component='input' type='text' placeholder='Логин' />
          </div>
          <div className={classes.inputWrap}>
            <Field name={'password'} component='input' type='password' placeholder='Пароль' />
          </div>
          <label className={classes.inputWrap}>
            <Field name={'rememberMe'} component='input' type='checkbox' />
            Замомнить меня
          </label>
          <div className={classes.inputWrap}>
            <button type='submit'> Войти</button>
          </div>
        </form>
      )}
    />
  );
};
