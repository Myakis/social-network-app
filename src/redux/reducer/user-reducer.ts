import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { userAPI } from '../../api.js';
import { UserType } from '../../types/reducers-types.js';
import { AppRootReducerType } from '../store-redux.js';
//ПОФИКСИТЬ ПОТОМ ЭТОТ REDUCER
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
type ActionTypes =
  | FollowSuccesActionType
  | UnFollowSuccesActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalCountActionType
  | ToggleFollowingProgressiveActionType
  | SetFetchingActionType;

const userReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
interface FollowSuccesActionType {
  type: typeof FOLLOW;
  userId: number;
}
export const followSucces = (userId: number): FollowSuccesActionType => ({ type: FOLLOW, userId });

interface UnFollowSuccesActionType {
  type: typeof UNFOLLOW;
  userId: number;
}
export const unFollowSucces = (userId: number): UnFollowSuccesActionType => ({
  type: UNFOLLOW,
  userId,
});

interface SetUsersActionType {
  type: typeof SET_USERS;
  users: Array<UserType>;
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

interface SetCurrentPageActionType {
  type: typeof SET_CURRENT_PAGE;
  current: number;
}
export const setCurrentPage = (current: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  current,
});

interface SetTotalCountActionType {
  type: typeof SET_TOTAL_COUNT;
  total: number;
}
export const setTotalCount = (total: number): SetTotalCountActionType => ({
  type: SET_TOTAL_COUNT,
  total,
});

interface SetFetchingActionType {
  type: typeof SET_FETCHING;
  loader: boolean;
}
export const setFetching = (loader: boolean): SetFetchingActionType => ({
  type: SET_FETCHING,
  loader,
});

interface ToggleFollowingProgressiveActionType {
  type: typeof TOGGLE_FOLLOWING_PROGRESSIVE;
  isFollowing: boolean | number[];
  userId: number;
}
export const toggleFollowingProgressive = (
  isFollowing: boolean | number[],
  userId: number,
): ToggleFollowingProgressiveActionType => ({
  type: TOGGLE_FOLLOWING_PROGRESSIVE,
  isFollowing,
  userId,
});

type ThunkType = ThunkAction<void, AppRootReducerType, unknown, AnyAction>;
//THUNK
export const getsUsers =
  (currentPage: number, usersCount: number): ThunkType =>
  dispatch => {
    dispatch(setFetching(true));
    userAPI.getUser(currentPage, usersCount).then(response => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setFetching(false));
      dispatch(setUsers(response.data.items));
      dispatch(setTotalCount(response.data.totalCount));
    });
  };

//THUNK
export const follow =
  (userId: number): ThunkType =>
  async dispatch => {
    dispatch(toggleFollowingProgressive(true, userId));
    const response = await userAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followSucces(userId));
      dispatch(toggleFollowingProgressive(false, userId));
    }
  };
//THUNK
export const unFollow =
  (userId: number): ThunkType =>
  async dispatch => {
    dispatch(toggleFollowingProgressive(true, userId));
    const response = await userAPI.unFollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(unFollowSucces(userId));
      dispatch(toggleFollowingProgressive(false, userId));
    }
  };

export default userReducer;
//==========================================================================================================
