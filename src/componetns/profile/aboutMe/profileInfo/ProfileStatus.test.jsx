import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='test status text field' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('test status text field');
  });

  test('after creation tag span should be displayed', () => {
    const component = create(<ProfileStatus status='test status text field' />);
    const instance = component.root;
    let span = instance.findByType('span');
    expect(span).not.toBeNull();
  });
  test('after creation tag input shouldt be displayed', () => {
    const component = create(<ProfileStatus status='test status text field' />);
    const instance = component.root;
    // let input = instance.findByType('input');
    expect(() => {
      let input = instance.findByType('input');
    }).toThrow();
  });
  test('after creation tag span should be text whitch be props.status', () => {
    const component = create(<ProfileStatus status='test status text field' />);
    const instance = component.root;
    let span = instance.findByType('span');
    expect(span.children[0]).toBe('test status text field');
  });
  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status='test status text field' updateUserStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.toggleStateField();

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
