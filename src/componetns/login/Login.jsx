import classes from './Login.module.css';
import { Form, Field } from 'react-final-form';
import React from 'react';
import { Input, maxValueCreator, minValueCreator, required } from '../utils/validators/FormControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = props => {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div>
      <h1>Вход</h1>
      <LoginForm login={props.login} errorMessage={props.errorMessage} />
    </div>
  );
};

const LoginForm = props => {
  const onSubmit = data => {
    props.login(data.email, data.password, data.rememberMe);
  };
  const maxValue = maxValueCreator(50);
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
              name={'email'}
              component={Input}
              type='text'
              placeholder='Email'
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
          {props.errorMessage && (
            <div className={classes.errorData}>
              <span>{props.errorMessage} </span>
            </div>
          )}
          <div className={classes.inputWrap}>
            <button type='submit'> Войти</button>
          </div>
        </form>
      )}
    />
  );
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, {
  login,
})(Login);
