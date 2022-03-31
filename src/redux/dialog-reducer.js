const ADD_MESSAGE = 'ADD-MESSAGE';
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      //Добавление сообщений в bll и рендер страницы
      if (action.messageText) {
        const newMessage = {
          id: 5,
          message: action.messageText,
          user: 'me',
          date: new Date(),
        };
        return { ...state, message: [...state.message, newMessage] };
      }
      return state;
    default:
      return state;
  }
};
export const addMessage = messageText => ({ type: ADD_MESSAGE, messageText });

export default dialogsReducer;
