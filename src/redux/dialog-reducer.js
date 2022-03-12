const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      //Добавление сообщений в bll и рендер страницы
      if (state.messageText) {
        const newMessage = {
          id: 5,
          message: state.messageText,
          user: 'me',
        };
        state.message.push(newMessage);
        state.messageText = '';
        return state;
      }
    case UPDATE_TEXT_MESSAGE:
      //Изменение текста сообщений в bll
      state.messageText = action.newText;
      return state;
  }
};
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateTextMessageActionCreator = textMessage => ({ type: UPDATE_TEXT_MESSAGE, newText: textMessage });

export default dialogsReducer;
