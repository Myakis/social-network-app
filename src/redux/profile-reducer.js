const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

const profileReducer = (state, action) => {
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
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateTextPostActionCreator = textPost => ({ type: UPDATE_TEXT_POST, newText: textPost });
export default profileReducer;
