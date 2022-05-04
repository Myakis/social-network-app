import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { filterType } from '../../redux/reducer/user-reducer';
import classes from './Users.module.css';

interface IPropsType {
  onFilter: (filter: filterType) => void;
}
interface IFormValues {
  term: string;
  friend: 'null' | 'true' | 'false';
}

const FormSearchUsers: FC<IPropsType> = ({ onFilter }) => {
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
      <Formik initialValues={{ term: '', friend: 'null' }} onSubmit={submitHandler}>
        {({ isSubmitting }) => (
          <Form className={classes.formSearch}>
            <Field className={classes.searchInput} type='text' name='term' />
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
