import { renderDomTree } from '../render';

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
  },
};

window.state = state;

export default state;

export let updateTextPost = newText => {
  state.profile.textPost = newText;
  renderDomTree(state);
};

export let addPost = () => {
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
