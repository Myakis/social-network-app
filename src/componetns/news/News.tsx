import { FC } from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const News: FC = () => {
  return <div></div>;
};

export default compose(withAuthRedirect)(News);
