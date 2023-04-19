/**
 * @jest-environment jsdom
 */

import React from 'react';
import { renderHook, fireEvent } from '@testing-library/react';
import { useKeyDown } from '../../src';

describe('useKeyDown', () => {
  it('Should capture keydown events', () => {
    const hook = renderHook(() => useKeyDown('Escape'));
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(typeof hook.result.current).toEqual('boolean');
    expect(hook.result.current).toEqual(true);
  });
});
