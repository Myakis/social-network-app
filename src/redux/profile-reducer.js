const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
  post: [
    { id: 1, message: 'Какое-то сообщение, которое потом будет написано мной для теста ', likeCount: 23, shareCount: 1 },
    { id: 2, message: 'Какое-то сообщение, которое потом будет написано мной для теста 22', likeCount: 223, shareCount: 21 },
  ],
  textPost: 'ssssss',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      //Добавление постов в bll и рендер страницы
      if (state.textPost) {
        const newPost = {
          id: 6,
          message: state.textPost,
          likeCount: 0,
          shareCount: 0,
        };
        state.post.push(newPost);
        state.textPost = '';
        return state;
      }
    case UPDATE_TEXT_POST:
      //Изменение текста постов в bll
      state.textPost = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export let updateTextPostActionCreator = textPost => ({ type: UPDATE_TEXT_POST, newText: textPost });
export default profileReducer;
