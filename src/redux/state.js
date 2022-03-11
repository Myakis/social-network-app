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

  //Добавление постов в bll и рендер страницы

  addPost() {
    if (this._state.profile.textPost) {
      const newPost = {
        id: 6,
        message: this._state.profile.textPost,
        likeCount: 0,
        shareCount: 0,
      };
      this._state.profile.post.push(newPost);
      this.updateTextPost('');
      this._callSubscribe(this._state);
    }
  },
  //Изменение текста постов в bll

  updateTextPost(newText) {
    this._state.profile.textPost = newText;
    this._callSubscribe(this._state);
  },

  //Добавление сообщений в bll и рендер страницы
  addMessage() {
    if (this._state.dialog.messageText) {
      const newMessage = {
        id: 5,
        message: this._state.dialog.messageText,
        user: 'me',
      };
      this._state.dialog.message.push(newMessage);
      this._callSubscribe('');
    }
  },

  //Изменение текста сообщений в bll
  updateTextMessage(newText) {
    this._state.dialog.messageText = newText;
    this._callSubscribe(this._state);
  },

  subscribe(obsever) {
    this._callSubscribe = obsever;
  },
};

export default store;
window.store = store;
