import { userAPI } from '../api.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_FETCHING = 'SET-FETCHING';
const TOGGLE_FOLLOWING_PROGRESSIVE = 'TOGGLE-FOLLOWING-PROGRESSIVE';

let initialState = {
  users: [],
  usersCount: 6,
  totalUsersCount: 20,
  currentPage: 1,
  ifFetching: true,
  isFollowing: [],
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
    case TOGGLE_FOLLOWING_PROGRESSIVE:
      return {
        ...state,
        isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = current => ({ type: SET_CURRENT_PAGE, current });
export const setTotalCount = total => ({ type: SET_TOTAL_COUNT, total });
export const setFetching = loader => ({ type: SET_FETCHING, loader });
export const toggleFollowingProgressive = (isFollowing, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESSIVE, isFollowing, userId });

export const getsUsers = (currentPage, usersCount) => {
  return dispatch => {
    dispatch(setFetching(true));

    userAPI.getUser(currentPage, usersCount).then(response => {
      dispatch(setFetching(false));
      dispatch(setUsers(response.data.items));
      dispatch(setTotalCount(response.data.totalCount));
    });
  };
};

export default userReducer;
//==========================================================================================================
