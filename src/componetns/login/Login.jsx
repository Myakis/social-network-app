import classes from './Login.module.css';
import { Form, Field } from 'react-final-form';
import React from 'react';
import { Input, maxValueCreator, minValueCreator, required } from '../utils/validators/FormControl';

export const Login = props => {
  return (
    <div>
      <h1>Вход</h1>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  const onSubmit = data => {
    console.log(data);
  };
  const maxValue = maxValueCreator(10);
  const minValue = minValueCreator(10);
  const composeValidators =
    (...validators) =>
    value =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form} action=''>
          <div className={classes.inputWrap}>
            <Field
              name={'login'}
              component={Input}
              type='text'
              placeholder='Логин'
              validate={composeValidators(required, maxValue)}
            />
          </div>
          <div className={classes.inputWrap}>
            <Field
              name={'password'}
              component={Input}
              type='password'
              placeholder='Пароль'
              validate={composeValidators(required, minValue)}
            />
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
