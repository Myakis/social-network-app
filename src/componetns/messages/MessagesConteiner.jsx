import { connect } from 'react-redux';
import { compose } from 'redux';

import { DialogActions } from '../../redux/reducer/dialog-reducer.ts';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Messages from './Messages';

const { addMessage } = DialogActions;
const mapStateToProps = state => {
  return {
    state: state,
    messageText: state.dialog.messageText,
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     addMessage: () => {
//       let action = addMessageActionCreator();
//       dispatch(action);
//     },
//     onChangeMessage: textPost => {
//       let action = updateTextMessageActionCreator(textPost);
//       dispatch(action);
//     },
//   };
// };

// let widthRedirectComponent = withAuthRedirect(Messages);

// let MessagesConteiner = connect(mapStateToProps, {
//   addMessage,
//   onChangeMessage,
// })(widthRedirectComponent);
// export default MessagesConteiner;

export default compose(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect,
)(Messages);
