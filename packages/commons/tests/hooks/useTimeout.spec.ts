/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react';
import { useTimeout } from '../../src';

describe('useTimeout', () => {
  it('Should return clear and reset functions', () => {
    jest.useFakeTimers();
    const cbSpy = jest.fn();
    const hook = renderHook(() => useTimeout(cbSpy, 10, true));
    expect(typeof hook.result.current.reset).toEqual('function');
    expect(typeof hook.result.current.clear).toEqual('function');
    jest.advanceTimersByTime(10);
    expect(cbSpy).toBeCalled();
    jest.runAllTimers();
  });

  it('With empty callback', () => {
    jest.useFakeTimers();
    const hook = renderHook(() => useTimeout(undefined, 10, true));
    expect(typeof hook.result.current.reset).toEqual('function');
    act(() => {
      hook.result.current.reset();
    });
    jest.advanceTimersByTime(10);
    jest.runAllTimers();
  });

  it('With no timeout', () => {
    jest.useFakeTimers();
    const hook = renderHook(() => useTimeout(undefined));
    expect(typeof hook.result.current.reset).toEqual('function');
    act(() => {
      hook.result.current.reset();
    });
    jest.advanceTimersByTime(10);
    jest.runAllTimers();
  });

  it('With callback disabled', () => {
    jest.useFakeTimers();
    const cbSpy = jest.fn();
    const hook = renderHook(() => useTimeout(cbSpy, 10, false));
    act(() => {
      hook.result.current.reset();
    });
    jest.advanceTimersByTime(10);
    expect(cbSpy).not.toBeCalled();
    jest.runAllTimers();
  });

  it('Should call passed function after given amount of time', () => {
    jest.useFakeTimers();
    const cbSpy = jest.fn();
    renderHook(() => useTimeout(cbSpy, 30));
    jest.advanceTimersByTime(10);
    expect(cbSpy).not.toBeCalled();

    jest.advanceTimersByTime(20);
    expect(cbSpy).toBeCalled();
    jest.runAllTimers();
  });

  it('Should be able to cancel timeout', () => {
    jest.useFakeTimers();
    const cbSpy = jest.fn();
    const hook = renderHook(() => useTimeout(cbSpy, 30));
    act(() => {
      hook.result.current.clear();
    });
    jest.advanceTimersByTime(10);
    expect(cbSpy).not.toBeCalled();
    jest.runAllTimers();
  });

  it('Should be able to reset timeout', () => {
    jest.useFakeTimers();
    const cbSpy = jest.fn();
    const hook = renderHook(() => useTimeout(cbSpy, 40));
    act(() => {
      hook.result.current.clear();
    });
    jest.advanceTimersByTime(10);
    expect(cbSpy).not.toBeCalled();

    act(() => {
      hook.result.current.reset();
    });

    jest.advanceTimersByTime(40);
    expect(cbSpy).toBeCalled();
    jest.runAllTimers();
  });
});
