import dialogsReducer from './dialog-reducer';
import profileReducer from './profile-reducer';

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
  getState() {
    return this._state;
  },
  _callSubscribe() {},

  dispatch(action) {
    profileReducer(store._state.profile, action);
    dialogsReducer(store._state.dialog, action);
    this._callSubscribe(this._state);
  },

  subscribe(obsever) {
    this._callSubscribe = obsever;
  },
};
