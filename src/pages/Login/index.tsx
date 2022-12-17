import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';
import { connect, ConnectedProps } from 'react-redux';
import { Navigate } from 'react-router-dom';

import classes from './Login.module.css';
import {
  Input,
  maxValueCreator,
  minValueCreator,
  required,
} from '../../utils/validators/FormControl';
import { login } from '../../redux/reducer/auth';
import { RootStateType } from '../../redux/store';

interface ILogin extends PropsFromRedux {
  isAuth: boolean;
  login: any;
  errorMessage: string;
  captchaUrl: string;
}
const Login: FC<ILogin> = props => {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div>
      <h1>Вход</h1>
      <LoginForm
        login={props.login}
        errorMessage={props.errorMessage}
        captchaUrl={props.captchaUrl}
      />
    </div>
  );
};

const LoginForm = (props: any) => {
  const onSubmit = (data: any) => {
    props.login(data.email, data.password, data.rememberMe, data.captcha);
  };
  const maxValue = maxValueCreator(50);
  const minValue = minValueCreator(4);

  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
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
          {props.captchaUrl && (
            <>
              <img src={props.captchaUrl} alt='captcha' />
              <Field name={'captcha'} component={Input} type='input' validate={required} />
            </>
          )}
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

interface ImapStateToProps {
  isAuth: boolean | null;
  errorMessage: string;
  captchaUrl: string | null;
}
const mapStateToProps = (state: RootStateType): ImapStateToProps => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
  captchaUrl: state.auth.captchaUrl,
});

const connector = connect(mapStateToProps, {
  login,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector<any>(Login);
