import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../redux/dialog-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Messages from './Messages';

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
  withAuthRedirect
)(Messages);
