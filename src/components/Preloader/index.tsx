import { FC } from 'react';
import preloaderCircle from 'images/svg/loader.svg'

const Preloader: FC = () => {
  return (
    <div className='preloader'>
      <img src={preloaderCircle} alt='' />
    </div>
  );
};
export default Preloader;
