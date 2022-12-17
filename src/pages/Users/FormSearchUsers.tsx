import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import { filterType } from '../../redux/reducer/user';
import classes from './Users.module.css';
import { getUsersFilter } from '../../redux/selectors/user-selector';

interface IPropsType {
  onFilter: (filter: filterType) => void;
}

type FormFriendType = 'null' | 'true' | 'false';
interface IFormValues {
  term: string;
  friend: FormFriendType;
}

const FormSearchUsers: FC<IPropsType> = ({ onFilter }) => {
  const filter = useSelector(getUsersFilter);

  const submitHandler = (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void },
  ) => {
    const filter: filterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false,
    };
    onFilter(filter);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friend: String(filter.friend) as FormFriendType }}
        onSubmit={submitHandler}>
        {({ isSubmitting }) => (
          <Form className={classes.formSearch}>
            <Field
              className={classes.searchInput}
              type='text'
              name='term'
              placeholder='Поиск по имени'
            />
            <Field as='select' name='friend'>
              <option value='null'>Все</option>
              <option value='true'>Мои подписки</option>
              <option value='false'>Еще не подписан</option>
            </Field>
            <div>
              <button type='submit' disabled={isSubmitting}>
                Поиск
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSearchUsers;
