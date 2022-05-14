import { connect } from 'react-redux';
import { compose } from 'redux';

import { dialogActions } from '../../redux/reducer/dialog-reducer';
import { RootStateType } from '../../redux/store-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Messages from './Messages';

const { addMessage } = dialogActions;
const mapStateToProps = (state: RootStateType) => {
  return {
    state: state,
  };
};

export default compose<any>(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect,
)(Messages);
