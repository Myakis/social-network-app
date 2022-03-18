import classes from './FormControl.module.css';

export const required = value => (value ? undefined : 'Обязательно поле');
export const maxValueCreator = maxValue => value =>
  value && value.length > maxValue ? `Не может быть больше ${maxValue}` : undefined;
export const minValueCreator = minValue => value =>
  value && value.length < minValue ? `Минимальная длина ${minValue}` : undefined;

const FieldForm = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={`${classes.parent} ${hasError ? classes.error : ''} `}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FieldForm {...props}>
      <input {...restProps} {...input} />
    </FieldForm>
  );
};

export const Textarea = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FieldForm {...props}>
      <textarea {...restProps} {...input} />
    </FieldForm>
  );
};
