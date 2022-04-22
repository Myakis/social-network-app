import { render, screen } from '@testing-library/react';

import profileReducer, { addPost, deletePost } from './reducer/profile-reducer';
let state = {
  post: [
    {
      id: 1,
      message: 'Какое-то сообщение, которое потом будет написано мной для теста ',
      likeCount: 23,
    },
    {
      id: 2,
      message: 'Какое-то сообщение, которое потом будет написано мной для теста 22',
      likeCount: 223,
    },
  ],
};
test('letgth of posts should be increment', () => {
  let action = addPost('test anything');

  let newState = profileReducer(state, action);

  expect(newState.post.length).toBe(3);
});

test('message posts should be equals param func addPost', () => {
  let action = addPost('test anything');

  let newState = profileReducer(state, action);

  expect(newState.post[2].message).toBe('test anything');
});
test('delete post', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.post.length).toBe(1);
});
