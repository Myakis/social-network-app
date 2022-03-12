const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';
let initialState = {
  users: [
    { id: 1, name: 'Алексей' },
    { id: 2, name: 'Кирилл' },
    { id: 3, name: 'Леонид' },
  ],
  message: [
    {
      id: 1,
      message: 'Привет ',
    },
    {
      id: 2,
      message:
        'Привет у меня очень хороший вопрос касательно всего того, что ты делаешь. Есть ли смысл учить react? Можешь ли ты ответить, как человек, который очень далеко ушел в этом',
      user: 'me',
    },
    { id: 3, message: 'Как дела' },
  ],
  messageText: '',
};
const dialogsReducer = (state = initialState, action) => {
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
      }
      return state;
    case UPDATE_TEXT_MESSAGE:
      //Изменение текста сообщений в bll
      state.messageText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateTextMessageActionCreator = textMessage => ({ type: UPDATE_TEXT_MESSAGE, newText: textMessage });

export default dialogsReducer;
