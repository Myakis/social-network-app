const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {
      id: 1,
      fullName: 'Леонид',
      avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
      followed: false,
      status: 'Какой-то статичный статус, который должен поставить пользователь',
      location: { cityName: 'Ussuriysk', country: 'Russia' },
    },
    {
      id: 2,
      fullName: 'Алексей',
      avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
      followed: true,
      status: 'Какой-то статичный статус, который должен поставить пользователь',
      location: { cityName: 'Ussuriysk', country: 'Russia' },
    },
    {
      id: 3,
      fullName: 'Кирилл',
      avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
      followed: true,
      status: 'Какой-то статичный статус, который должен поставить пользователь',
      location: { cityName: 'Ussuriysk', country: 'Russia' },
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followActionCreateor = userId => ({ type: FOLLOW, userId });
export const unfollowActionCreateor = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreateor = users => ({ type: SET_USERS, users });
export default userReducer;
