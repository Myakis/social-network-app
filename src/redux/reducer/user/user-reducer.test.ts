import userReducer, { initialStateType } from '.';
import { UserActions } from '.';

const state: initialStateType = {
  users: [
    {
      id: 0,
      name: 'andrew',
      followed: false,
      status: 'status 1',
      photos: { large: null, small: null },
    },
    {
      id: 1,
      name: 'andrew',
      followed: false,
      status: 'status 1',
      photos: { large: null, small: null },
    },
    {
      id: 2,
      name: 'andrew',
      followed: true,
      status: 'status 1',
      photos: { large: null, small: null },
    },
  ],
  currentPage: 1,
  ifFetching: false,
  isFollowing: [],
  totalUsersCount: 0,
  usersCount: 10,
  filter: {
    term: '',
    friend: null,
  },
};

test('follow success', () => {
  const newState = userReducer(state, UserActions.followSucces(0));
  expect(newState.users[0].followed).toBeTruthy();
  expect(newState.users[1].followed).toBeFalsy();
});
test('unfollow success', () => {
  const newState = userReducer(state, UserActions.unFollowSuccess(2));
  expect(newState.users[2].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeFalsy();
});
