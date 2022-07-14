/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react-hooks/dom';
import {useTimeout} from "@tidy-ui/commons";

describe('useTimeout', () => {

  test('Should return clear and reset functions', () => {
    const hook = renderHook(() => useTimeout(() => {
      console.log("test useTimeout");
    }, 0));
    expect(typeof hook.result.current.reset).toEqual("function");
    expect(typeof hook.result.current.clear).toEqual("function");
  });
});