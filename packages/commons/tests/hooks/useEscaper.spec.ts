/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { useEscaper } from '../../src';

describe('useIsMounted', () => {
  it('Should escape all no letter characters', () => {
    const hook = renderHook(() => useEscaper('Ha12 !@#$%^&*()_+ {}[]hello -=|:"; <,> .?/*-+   '));
    expect(typeof hook.result.current).toEqual('string');
    expect(hook.result.current).toEqual('Ha12-_-hello-');
  });
  it('Should escape empty value', () => {
    const hook = renderHook(() => useEscaper(undefined));
    expect(typeof hook.result.current).toEqual('undefined');
    expect(hook.result.current).toEqual(undefined);
  });
});
