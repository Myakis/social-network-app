let renderDomTree = () => {};

let state = {
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
};

window.state = state;

export default state;

export const subscribe = obsever => {
  renderDomTree = obsever;
};
//Изменение текста постов в bll
export const updateTextPost = newText => {
  state.profile.textPost = newText;
  renderDomTree(state);
};
//Изменение текста сообщений в bll
export const updateTextMessage = newText => {
  state.dialog.messageText = newText;
  renderDomTree(state);
};

//Добавление постов в bll и рендер страницы

export const addPost = () => {
  if (state.profile.textPost) {
    const newPost = {
      id: 6,
      message: state.profile.textPost,
      likeCount: 0,
      shareCount: 0,
    };
    state.profile.post.push(newPost);

    renderDomTree(state);
  }
};

//Добавление сообщений в bll и рендер страницы
export const addMessage = () => {
  if (state.dialog.messageText) {
    const newMessage = {
      id: 5,
      message: state.dialog.messageText,
      user: 'me',
    };
    state.dialog.message.push(newMessage);
  }
};
