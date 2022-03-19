export const getUsersSelector = state => state.users.users;
export const getUsersCountSelector = state => state.users.usersCount;
export const getCurrentPageSelector = state => state.users.currentPage;
export const getTotalUsersCountSelector = state => state.users.totalUsersCount;
export const getFethSelector = state => state.users.ifFetching;
export const getFollowSelector = state => state.users.isFollowing;
