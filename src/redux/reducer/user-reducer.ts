import { userAPI } from '../../api/api';
import { ResultCodeEnum } from '../../types/api-types';
import { ActionsTypes, ThunkType, UserType } from '../../types/reducers-types';

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

const userReducer = (
  state = initialState,
  action: ActionsTypes<typeof UserActions>,
): initialStateType => {
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
export const UserActions = {
  followSucces: (userId: number) => ({ type: FOLLOW, userId } as const),
  unFollowSucces: (userId: number) =>
    ({
      type: UNFOLLOW,
      userId,
    } as const),
  setUsers: (users: Array<UserType>) =>
    ({
      type: SET_USERS,
      users,
    } as const),
  setCurrentPage: (current: number) =>
    ({
      type: SET_CURRENT_PAGE,
      current,
    } as const),
  setTotalCount: (total: number) =>
    ({
      type: SET_TOTAL_COUNT,
      total,
    } as const),
  setFetching: (loader: boolean) =>
    ({
      type: SET_FETCHING,
      loader,
    } as const),
  toggleFollowingProgressive: (isFollowing: boolean | number[], userId: number) =>
    ({
      type: TOGGLE_FOLLOWING_PROGRESSIVE,
      isFollowing,
      userId,
    } as const),
};

//THUNK
export const getsUsers =
  (currentPage: number, usersCount: number): ThunkType =>
  dispatch => {
    dispatch(UserActions.setFetching(true));
    userAPI.getUser(currentPage, usersCount).then(response => {
      dispatch(UserActions.setCurrentPage(currentPage));
      dispatch(UserActions.setFetching(false));
      dispatch(UserActions.setUsers(response.data.items));
      dispatch(UserActions.setTotalCount(response.data.totalCount));
    });
  };

//THUNK
export const follow =
  (userId: number): ThunkType =>
  async dispatch => {
    dispatch(UserActions.toggleFollowingProgressive(true, userId));
    const response = await userAPI.follow(userId);

    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(UserActions.followSucces(userId));
    }
    dispatch(UserActions.toggleFollowingProgressive(false, userId));
  };

//THUNK
export const unFollow =
  (userId: number): ThunkType =>
  async dispatch => {
    dispatch(UserActions.toggleFollowingProgressive(true, userId));
    const response = await userAPI.unFollow(userId);
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(UserActions.unFollowSucces(userId));
    }
    dispatch(UserActions.toggleFollowingProgressive(false, userId));
  };

export default userReducer;
//==========================================================================================================
