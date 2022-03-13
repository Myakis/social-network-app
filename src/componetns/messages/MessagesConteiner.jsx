import { connect } from 'react-redux';
import { addMessageActionCreator, updateTextMessageActionCreator } from '../../redux/dialog-reducer';
import Messages from './Messages';

const mapStateToProps = state => {
  return {
    state: state,
    messageText: state.dialog.messageText,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    },
    onChangeMessage: textPost => {
      let action = updateTextMessageActionCreator(textPost);
      dispatch(action);
    },
  };
};

let MessagesConteiner = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesConteiner;
