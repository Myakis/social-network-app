import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const News = () => {
  return <div></div>;
};

export default compose(withAuthRedirect)(News);
