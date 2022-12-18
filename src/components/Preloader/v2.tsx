import { FC } from 'react';
import classes from './Preloader.module.css';

const Preloader2: FC = () => {
  return (
    <div className={classes.loaderWrap}>
      <div className={classes.loader}></div>;
    </div>
  );
};
export default Preloader2;
