/**
 * @jest-environment jsdom
 */

import React from 'react';
import { renderHook, fireEvent } from '@testing-library/react';
import { useKeyPress } from '../../src';

describe('useKeyPress', () => {
  it('Should capture keypress events', () => {
    const hook = renderHook(() => useKeyPress('Escape'));
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(typeof hook.result.current).toEqual('boolean');
    expect(hook.result.current).toEqual(true);
    fireEvent.keyUp(window, { key: 'Escape' });
    expect(hook.result.current).toEqual(false);
  });
});
