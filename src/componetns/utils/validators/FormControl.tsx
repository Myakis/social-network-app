import { FC } from 'react';
import classes from './FormControl.module.css';

export const required = (value: string | undefined) => (value ? undefined : 'Обязательно поле');
export const validateURL = (URL: string) => {
  var regExURL =
    /^[A-Za-z][A-Za-z0-9+\-.]*:(?:\/\/(?:(?:[A-Za-z0-9\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\.[A-Za-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\/(?:(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\?(?:[A-Za-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9A-Fa-f]{2})*)?(?:\#(?:[A-Za-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9A-Fa-f]{2})*)?$/;
  const response = regExURL.test(URL);
  return response === true || URL == null ? undefined : 'Некорректная ссылка';
};
export const maxValueCreator = (maxValue: number) => (value: string) =>
  value && value.length > maxValue ? `Не может быть больше ${maxValue}` : undefined;
export const minValueCreator = (minValue: number) => (value: string) =>
  value && value.length < minValue ? `Минимальная длина ${minValue}` : undefined;

interface iFieldForm {
  input: string;
  meta: {
    touched: boolean;
    error: string;
  };
  children: React.ReactNode;
}

const FieldForm: FC<iFieldForm> = ({ input, meta: { touched, error }, children }) => {
  const hasError = error && touched;
  return (
    <div className={`${classes.parent} ${hasError ? classes.error : ''} `}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input: FC = (props: any) => {
  const { input, meta, ...restProps } = props;
  return (
    <FieldForm {...props}>
      <input {...restProps} {...input} />
    </FieldForm>
  );
};

export const Textarea: FC = (props: any) => {
  const { input, meta, ...restProps } = props;
  return (
    <FieldForm {...props}>
      <textarea {...restProps} {...input} />
    </FieldForm>
  );
};
