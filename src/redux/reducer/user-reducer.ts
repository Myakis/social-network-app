import { userAPI } from '../../api.js';
import { UserType } from '../../types/reducers-types.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_FETCHING = 'SET-FETCHING';
const TOGGLE_FOLLOWING_PROGRESSIVE = 'TOGGLE-FOLLOWING-PROGRESSIVE';

let initialState = {
  users: [] as Array<UserType>,
  usersCount: 6,
  totalUsersCount: 20,
  currentPage: 1,
  ifFetching: true,
  isFollowing: [] as Array<number>, //массив с users id на которых мы подписались
};

export type initialStateType = typeof initialState;

const userReducer = (state = initialState, action: any): initialStateType => {
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

//Action Creator
export const followSucces = (userId: number) => ({ type: FOLLOW, userId });
export const unFollowSucces = (userId: number) => ({ type: UNFOLLOW, userId });
export const setUsers = (users: UserType) => ({ type: SET_USERS, users });
export const setCurrentPage = (current: number) => ({ type: SET_CURRENT_PAGE, current });
export const setTotalCount = (total: number) => ({ type: SET_TOTAL_COUNT, total });
export const setFetching = (loader: boolean) => ({ type: SET_FETCHING, loader });
export const toggleFollowingProgressive = (ifFetching: boolean, userId: number) => ({
  type: TOGGLE_FOLLOWING_PROGRESSIVE,
  ifFetching,
  userId,
});

//THUNK
export const getsUsers = (currentPage: number, usersCount: number) => (dispatch: any) => {
  dispatch(setFetching(true));

  userAPI.getUser(currentPage, usersCount).then(response => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalCount(response.data.totalCount));
  });
};

//THUNK
export const follow = (userId: any) => async (dispatch: any) => {
  dispatch(toggleFollowingProgressive(true, userId));
  const response = await userAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSucces(userId));
    dispatch(toggleFollowingProgressive(false, userId));
  }
};
//THUNK
export const unFollow = (userId: any) => async (dispatch: any) => {
  dispatch(toggleFollowingProgressive(true, userId));
  const response = await userAPI.unFollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unFollowSucces(userId));
    dispatch(toggleFollowingProgressive(false, userId));
  }
};

export default userReducer;
//==========================================================================================================
