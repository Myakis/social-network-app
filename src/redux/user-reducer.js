const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_FETCHING = 'SET-FETCHING';
let initialState = {
  users: [],
  usersCount: 5,
  totalUsersCount: 20,
  currentPage: 1,
  ifFetching: true,
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
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.current };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.total };
    case SET_FETCHING:
      return { ...state, ifFetching: action.loader };
    default:
      return state;
  }
};

export const followActionCreateor = userId => ({ type: FOLLOW, userId });
export const unfollowActionCreateor = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreateor = users => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = current => ({ type: SET_CURRENT_PAGE, current });
export const setTotalCountActionCreator = total => ({ type: SET_TOTAL_COUNT, total });
export const setFetching = loader => ({ type: SET_FETCHING, loader });
export default userReducer;
//==========================================================================================================

// {
//   id: 1,
//   fullName: 'Леонид',
//   avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
//   followed: false,
//   status: 'Какой-то статичный статус, который должен поставить пользователь',
//   location: { cityName: 'Ussuriysk', country: 'Russia' },
// },
// {
//   id: 2,
//   fullName: 'Алексей',
//   avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
//   followed: true,
//   status: 'Какой-то статичный статус, который должен поставить пользователь',
//   location: { cityName: 'Ussuriysk', country: 'Russia' },
// },
// {
//   id: 3,
//   fullName: 'Кирилл',
//   avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
//   followed: true,
//   status: 'Какой-то статичный статус, который должен поставить пользователь',
//   location: { cityName: 'Ussuriysk', country: 'Russia' },
// },
