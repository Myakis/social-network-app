import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';

import classes from '../ProfileInfo.module.css';
import { Input, required, validateURL } from '../../../../utils/validators/FormControl';
import Preloader2 from '../../../../common/preloader/Preloader2';
import { setLogin } from '../../../../../redux/reducer/auth-reducer.ts';

//Блок с информацией на главной странице пользователя
export const ProfileDecription = ({ profile, setEditMode, isOwer }) => {
  return (
    <>
      {profile.aboutMe && (
        <div className={classes.itemDescr}>
          <span> Обо мне:</span> {profile.aboutMe}
        </div>
      )}
      {profile.lookingForAJob && (
        <div className={classes.itemDescr}>
          <span> В поисках работы</span>
        </div>
      )}
      {profile.lookingForAJob && (
        <div className={classes.itemDescr}>
          <span> Профессиональные скиллы:</span> {profile.lookingForAJobDescription}
        </div>
      )}
      {/* Перебераем весь массив contacts и на его основе создаем разметку */}
      {Object.entries(profile.contacts)
        .filter(item => item[1])
        .map(item => (
          <div key={item} className={classes.itemDescr}>
            <span>{item[0]}:</span>
            <a href={item[1]} target='_blank'>
              {item[1]}
            </a>
          </div>
        ))}
      {/* Поялвятеся только на своей странице(чужие профиля редактировать нельзя) */}
      {isOwer && (
        <button className={classes.editDescription} onClick={() => setEditMode(true)}>
          Редактировать
        </button>
      )}
    </>
  );
};

//Форма редактирования информации на главной странице
export const FormDescription = ({ setEditMode, profile, saveData, ...props }) => {
  const [loadDescr, setLoadDescr] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = data => {
    setLoadDescr(false);

    saveData(data).then(response => {
      setLoadDescr(true);
      setEditMode(false);
      dispatch(setLogin(data.fullName));
    });
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ ...profile }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          {!loadDescr && <Preloader2 />}
          <label className={classes.inputWrap}>
            <span> Имя</span>
            <Field
              name={'fullName'}
              component={Input}
              type='text'
              placeholder='Имя'
              validate={required}
            />
          </label>
          <label className={classes.inputWrap}>
            <span> Обо мне</span>
            <Field
              name={'aboutMe'}
              component={Input}
              type='text'
              placeholder='Обо мне'
              validate={required}
            />
          </label>
          <label className={classes.inputWrap}>
            <span> Ищу работу</span>
            <Field name={'lookingForAJob'} component='input' type='checkbox' />
          </label>
          <label className={classes.inputWrap}>
            <span>Мои профессиональные скиллы</span>
            <Field
              name={'lookingForAJobDescription'}
              component={Input}
              type='text'
              placeholder='Мои профессиональные скиллы'
            />
          </label>
          <hr />
          <h2>Контакты</h2>
          {Object.entries(profile.contacts).map((item, i) => (
            <label key={i} className={classes.inputWrap}>
              <span>{item[0]}</span>
              <Field
                name={`contacts.${item[0]}`}
                component={Input}
                type='text'
                placeholder={item[0]}
                validate={validateURL}
              />
            </label>
          ))}
          {props.errorMessage && (
            <div className={classes.errorData}>
              <span>{props.errorMessage} </span>
            </div>
          )}
          <div className={classes.inputWrap}>
            <button className={classes.editDescription} type='submit'>
              Сохранить
            </button>
          </div>
        </form>
      )}
    />
  );
};
