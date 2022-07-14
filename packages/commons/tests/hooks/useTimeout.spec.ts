/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react-hooks/dom';
import { useTimeout } from '@tidy-ui/commons';
import sinon from 'sinon';

describe('useTimeout', () => {

  afterEach(() => {
    sinon.restore()
  });

  test('Should return clear and reset functions', () => {
    const hook = renderHook(() =>
      useTimeout(() => {
        console.log('test useTimeout');
      }, 0),
    );
    expect(typeof hook.result.current.reset).toEqual('function');
    expect(typeof hook.result.current.clear).toEqual('function');
  });

  test('Should call passed function after given amount of time', () => {
    const clock = sinon.useFakeTimers();
    const cbSpy = sinon.spy();
    renderHook(() => useTimeout(cbSpy, 30));
    clock.tick(10);
    expect(cbSpy.calledOnce).toEqual(false);

    clock.tick(20);
    expect(cbSpy.calledOnce).toEqual(true);
  });

  test('Should be able to cancel timeout', () => {
    const clock = sinon.useFakeTimers();
    const cbSpy = sinon.spy();
    const hook = renderHook(() => useTimeout(cbSpy, 30));
    act(() => {
      hook.result.current.clear();
    });
    clock.tick(10);
    expect(cbSpy.calledOnce).toEqual(false);
  });

  test('Should be able to reset timeout', () => {
    const clock = sinon.useFakeTimers();
    const cbSpy = sinon.spy();
    const hook = renderHook(() => useTimeout(cbSpy, 40));
    act(() => {
      hook.result.current.clear();
    });
    clock.tick(10);
    expect(cbSpy.calledOnce).toEqual(false);

    act(() => {
      hook.result.current.reset();
    });

    clock.tick(40);
    expect(cbSpy.calledOnce).toEqual(true);
  });
});
