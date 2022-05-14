import { FC } from 'react';
import preloader from '../../../assets/img/loader.svg';

const Preloader: FC = () => {
  return (
    <div className='preloader'>
      <img src={preloader} alt='' />
    </div>
  );
};
export default Preloader;
