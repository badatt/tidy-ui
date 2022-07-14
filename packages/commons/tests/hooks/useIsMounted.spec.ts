/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react-hooks/dom';
import {useIsMounted} from "@tidy-ui/commons";

describe('useIsMounted', () => {

  test('Should return isMounted', () => {
    const hook = renderHook(() => useIsMounted());
    expect(typeof hook.result.current()).toEqual("boolean");
    expect(hook.result.current()).toEqual(true);
  });
});