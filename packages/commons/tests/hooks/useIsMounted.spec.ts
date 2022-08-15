/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { useIsMounted } from '../../src';

describe('useIsMounted', () => {
  it('Should return isMounted', () => {
    const hook = renderHook(() => useIsMounted());
    expect(typeof hook.result.current()).toEqual('boolean');
    expect(hook.result.current()).toEqual(true);
  });
});
