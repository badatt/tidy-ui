import { createChainedFunction } from '../../src';

describe('Create chained function', () => {
  it('Creates a chained function', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn = createChainedFunction(fn1, fn2);
    fn();
    expect(fn1).toBeCalled();
    expect(fn2).toBeCalled();
  });

  it('Throw error if function is not passed as argument', () => {
    const fn1 = 9;
    const fn2 = 10;
    const t = () => {
      const fn = createChainedFunction(fn1, fn2);
      Object.apply(fn);
    };
    expect(t).toThrow(Error);
    expect(t).toThrow('Invalid Argument Type, must only provide functions, undefined, or null.');
  });
});
