const ADD_MESSAGE = 'ADD-MESSAGE';

interface UserNameTypes {
  id: number;
  name: string;
}

interface MessageDataTypes {
  id: number;
  message: string;
  user?: string;
}

let initialState = {
  users: [
    { id: 1, name: 'Алексей' },
    { id: 2, name: 'Кирилл' },
    { id: 3, name: 'Леонид' },
  ] as Array<UserNameTypes>,
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
  ] as Array<MessageDataTypes>,
};

export type initialStateTypes = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateTypes => {
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
interface addMessageActionType {
  type: typeof ADD_MESSAGE;
  messageText: string;
}

export const addMessage = (messageText: string): addMessageActionType => ({
  type: ADD_MESSAGE,
  messageText,
});

export default dialogsReducer;
