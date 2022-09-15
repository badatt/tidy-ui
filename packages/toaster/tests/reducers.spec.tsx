/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { IToasterState } from '../src/reducers/types';
import { reducer, queue, toastSize, initializer } from '../src/reducers';
import { ToasterActions, ToasterActionTypes } from '../src/actions';

describe('Toaster reducer', () => {
  let initialState: IToasterState;
  const originalSome = Array.prototype.some;
  const originalFilter = Array.prototype.filter;
  beforeEach(() => {
    initialState = initializer({
      toasts: [],
    });
  });
  afterEach(() => {
    Array.prototype.some = originalSome;
    Array.prototype.filter = originalFilter;
  });
  it('Default', () => {
    const action = {
      type: 'default',
      payload: {},
    };
    const mutatedState = reducer(initialState, action as ToasterActionTypes);
    expect(mutatedState.toasts.length).toEqual(initialState.toasts.length);
    expect(queue.length).toEqual(0);
    expect(toastSize.current).toEqual(0);
  });
  it('Add toast', () => {
    const action: ToasterActionTypes = {
      type: ToasterActions.AddToast,
      payload: { item: <div>Hello</div> },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(1);
    expect(queue.length).toEqual(0);
    expect(toastSize.current).toEqual(1);
  });
  it('Add toast empty payload', () => {
    const action: ToasterActionTypes = {
      type: ToasterActions.AddToast,
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(0);
    expect(queue.length).toEqual(0);
    expect(toastSize.current).toEqual(1);
  });

  it('Queue toast', () => {
    const action: ToasterActionTypes = {
      type: ToasterActions.QueueToast,
      payload: { item: <div>Hello</div> },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(0);
    expect(queue.length).toEqual(1);
    expect(toastSize.current).toEqual(1);
  });
  it('Queue toast empty payload', () => {
    const action: ToasterActionTypes = {
      type: ToasterActions.QueueToast,
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(0);
    expect(queue.length).toEqual(1);
    expect(toastSize.current).toEqual(1);
  });

  it('Clear toast', () => {
    const action: ToasterActionTypes = {
      type: ToasterActions.Clear,
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(0);
    expect(queue.length).toEqual(0);
    expect(toastSize.current).toEqual(0);
  });

  it('Remove toast', () => {
    initialState = initializer({
      toasts: [{ id: '1', item: <div>hello</div> }],
    });
    const action: ToasterActionTypes = {
      type: ToasterActions.RemoveToast,
      payload: { id: '1' },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(0);
    expect(queue.length).toEqual(0);
  });

  it('Remove toast invalid id', () => {
    initialState = initializer({
      toasts: [{ id: '2', item: <div>hello</div> }],
    });
    const action: ToasterActionTypes = {
      type: ToasterActions.RemoveToast,
      payload: { id: '1' },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(1);
  });

  it('Remove toast without payload', () => {
    initialState = initializer({
      toasts: [{ id: '2', item: <div>hello</div> }],
    });
    const action: ToasterActionTypes = {
      type: ToasterActions.RemoveToast,
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.toasts.length).toEqual(1);
  });
});
