const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE}';

let initialState = {
  post: [
    { id: 1, message: 'Какое-то сообщение, которое потом будет написано мной для теста ', likeCount: 23, shareCount: 1 },
    { id: 2, message: 'Какое-то сообщение, которое потом будет написано мной для теста 22', likeCount: 223, shareCount: 21 },
  ],
  textPost: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      //Добавление постов в bll и рендер страницы
      if (state.textPost) {
        let newPost = {
          id: 6,
          message: state.textPost,
          likeCount: 0,
          shareCount: 0,
        };
        return { ...state, post: [...state.post, newPost], textPost: '' };
      }
    case UPDATE_TEXT_POST:
      //Изменение текста постов в bll
      return { ...state, textPost: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};
export const addPost = () => ({ type: ADD_POST });
export const updateTextPost = textPost => ({ type: UPDATE_TEXT_POST, newText: textPost });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export default profileReducer;
