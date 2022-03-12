const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';
let store = {
  _state: {
    profile: {
      post: [
        { id: 1, message: 'Какое-то сообщение, которое потом будет написано мной для теста ', likeCount: 23, shareCount: 1 },
        { id: 2, message: 'Какое-то сообщение, которое потом будет написано мной для теста 22', likeCount: 223, shareCount: 21 },
      ],
      textPost: '',
    },
    dialog: {
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
    },
  },
  get state() {
    return this._state;
  },
  _callSubscribe() {},

  dispatch(action) {
    //Добавление постов в bll и рендер страницы
    if (action.type === 'ADD-POST') {
      if (this._state.profile.textPost) {
        const newPost = {
          id: 6,
          message: this._state.profile.textPost,
          likeCount: 0,
          shareCount: 0,
        };
        this._state.profile.post.push(newPost);
        this._callSubscribe(this._state);
      }
    } else if (action.type === 'UPDATE-TEXT-POST') {
      //Изменение текста постов в bll
      this._state.profile.textPost = action.newText;
      this._callSubscribe(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      //Добавление сообщений в bll и рендер страницы
      if (this._state.dialog.messageText) {
        const newMessage = {
          id: 5,
          message: this._state.dialog.messageText,
          user: 'me',
        };
        this._state.dialog.message.push(newMessage);
        // this._callSubscribe('');
        this._callSubscribe(this._state);
      }
    } else if (action.type === 'UPDATE-TEXT-MESSAGE') {
      //Изменение текста сообщений в bll
      this._state.dialog.messageText = action.newText;
      this._callSubscribe(this._state);
    }
  },

  subscribe(obsever) {
    this._callSubscribe = obsever;
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateTextPostActionCreator = textPost => ({ type: UPDATE_TEXT_POST, newText: textPost });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateTextMessageActionCreator = textMessage => ({ type: UPDATE_TEXT_MESSAGE, newText: textMessage });

export default store;
window.store = store;
