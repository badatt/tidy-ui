/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { useHash } from '../../src';

const input = 'Hello world!';

describe('useIsMounted', () => {
  it('Should generate hash with default alg', () => {
    const hook = renderHook(() => useHash(input));
    expect(typeof hook.result.current).toEqual('string');
    expect(hook.result.current).toEqual('c0535e4be2b79ffd93291305436bf889314e4a3faec05ecffcbb7df31ad9e51a');
  });
  it('Should generate hash with sha256', () => {
    const hook = renderHook(() => useHash(input, { alg: 'SHA256' }));
    expect(typeof hook.result.current).toEqual('string');
    expect(hook.result.current).toEqual('c0535e4be2b79ffd93291305436bf889314e4a3faec05ecffcbb7df31ad9e51a');
  });
  it('Should generate hash with sha1', () => {
    const hook = renderHook(() => useHash(input, { alg: 'SHA1' }));
    expect(typeof hook.result.current).toEqual('string');
    expect(hook.result.current).toEqual('d3486ae9136e7856bc42212385ea797094475802');
  });
  it('Should generate hash with md5', () => {
    const hook = renderHook(() => useHash(input, { alg: 'MD5' }));
    expect(typeof hook.result.current).toEqual('string');
    expect(hook.result.current).toEqual('86fb269d190d2c85f6e0468ceca42a20');
  });
  it('Should truncate the generated hash for given max length', () => {
    const hook = renderHook(() => useHash(input, { maxLen: 8 }));
    expect(typeof hook.result.current).toEqual('string');
    expect(hook.result.current).toEqual('c0535e4b');
    expect(hook.result.current).toHaveLength(8);
  });
  it('Should safely escape undefined input', () => {
    const hook = renderHook(() => useHash());
    expect(typeof hook.result.current).toEqual('undefined');
  });
  it('Should safely escape undefined input with max len', () => {
    const hook = renderHook(() => useHash(undefined, { maxLen: 9 }));
    expect(typeof hook.result.current).toEqual('undefined');
  });
  it('Should generate hash with BKDR', () => {
    const hook = renderHook(() => useHash(input, { alg: 'BKDR' }));
    expect(typeof hook.result.current).toEqual('number');
    expect(hook.result.current).toEqual(281143655938687);
  });
});
