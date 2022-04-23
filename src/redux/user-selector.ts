import { createSelector } from 'reselect';
import { AppRootReducerType } from './store-redux';

export const getUsers = (state: AppRootReducerType) => state.users.users;
export const getUsersSelector = createSelector(getUsers, users => {
  return users.filter(u => true);
});
export const getUsersCountSelector = (state: AppRootReducerType) => state.users.usersCount;
export const getCurrentPageSelector = (state: AppRootReducerType) => state.users.currentPage;
export const getTotalUsersCountSelector = (state: AppRootReducerType) =>
  state.users.totalUsersCount;
export const getFethSelector = (state: AppRootReducerType) => state.users.ifFetching;
export const getFollowSelector = (state: AppRootReducerType) => state.users.isFollowing;
