import { createSelector } from 'reselect';
import { RootStateType } from './store-redux';

export const getUsers = (state: RootStateType) => state.users.users;
export const getUsersSelector = createSelector(getUsers, users => {
  return users.filter(u => true);
});
export const getUsersCountSelector = (state: RootStateType) => state.users.usersCount;
export const getCurrentPageSelector = (state: RootStateType) => state.users.currentPage;
export const getTotalUsersCountSelector = (state: RootStateType) => state.users.totalUsersCount;
export const getFethSelector = (state: RootStateType) => state.users.ifFetching;
export const getFollowSelector = (state: RootStateType) => state.users.isFollowing;
