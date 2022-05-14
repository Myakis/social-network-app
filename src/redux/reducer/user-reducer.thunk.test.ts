import { userAPI } from '../../api/api';
import { IResponse, ResultCodeEnum } from '../../types/api-types';
import { follow, unFollow, UserActions } from './user-reducer';
jest.mock('../../api/api');
const userAPIMock = userAPI as jest.Mocked<typeof userAPI>;

const result: IResponse = {
  data: {},
  messages: [],
  resultCode: ResultCodeEnum.success,
};

userAPIMock.follow.mockReturnValue(Promise.resolve(result));
userAPIMock.unFollow.mockReturnValue(Promise.resolve(result));

test('thunk follow', async () => {
  const thunk = follow(1);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(1, UserActions.toggleFollowingProgressive(true, 3));
  expect(dispatchMock).toHaveBeenCalledWith(1, UserActions.followSucces(3));
  expect(dispatchMock).toHaveBeenCalledWith(1, UserActions.toggleFollowingProgressive(false, 3));
});

test('thunk unfollow', async () => {
  const thunk = unFollow(1);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(1, UserActions.toggleFollowingProgressive(true, 3));
  expect(dispatchMock).toHaveBeenCalledWith(1, UserActions.unFollowSuccess(3));
  expect(dispatchMock).toHaveBeenCalledWith(1, UserActions.toggleFollowingProgressive(false, 3));
});
