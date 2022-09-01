import React from 'react';

/**
 * Actions on useTimeout
 *
 * @typedef {IUseTimeoutFnReturn}
 * @interface IUseTimeoutFnReturn
 * @public
 */
export interface IUseTimeoutFnReturn {
  /** Clears the current timeout */
  clear: () => void;

  /** Clears the current timeout and restarts afresh */
  reset: () => void;
}

/**
 * Timeout a callback function
 *
 * @param {Function} fn Timer callback function
 * @param {number} ms Milliseconds of the timer
 * @param {boolean} enabled Whether to open the timer
 * @returns {IUseTimeoutFnReturn} action on the timeout object
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const useTimeout = (fn: ((e?: any) => void) | undefined, ms = 0, enabled = true): IUseTimeoutFnReturn => {
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();
  const cb = React.useRef(fn);

  /**
   * Clears timeout
   */
  const clearTo = () => {
    timeout.current && clearTimeout(timeout.current);
  };

  const clear = React.useCallback(() => {
    clearTo();
  }, []);

  const setTo = React.useCallback(() => {
    clearTo();
    if (enabled) {
      timeout.current = setTimeout(() => {
        cb.current?.();
      }, ms);
    }
  }, [ms, enabled]);

  React.useEffect(() => {
    cb.current = fn;
  }, [fn]);

  React.useEffect(() => {
    setTo();
    return clear;
  }, [ms, enabled, setTo, clear]);

  return { clear, reset: setTo };
};

export default useTimeout;
