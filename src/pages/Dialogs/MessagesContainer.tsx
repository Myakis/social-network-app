import { connect } from 'react-redux';
import { compose } from 'redux';

import { dialogActions } from '../../redux/reducer/dialog';
import { RootStateType } from '../../redux/store';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Messages from '.';

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
