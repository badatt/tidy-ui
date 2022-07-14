import { useCallback, useEffect, useRef } from 'react';

export interface IUseTimeoutFnReturn {
  /** Clears the current timeout */
  clear: () => void;

  /** Clears the current timeout and restarts afresh */
  reset: () => void;
}

/**
 * Timeout a callback function
 * @param fn Timer callback function
 * @param ms Milliseconds of the timer
 * @param enabled Whether to open the timer
 */
const useTimeout = (fn: (() => void) | undefined, ms = 0, enabled = true): IUseTimeoutFnReturn => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const cb = useRef(fn);

  const clearTo = () => {
    timeout.current && clearTimeout(timeout.current);
  };

  const clear = useCallback(() => {
    clearTo();
  }, []);

  const setTo = useCallback(() => {
    clearTo();
    if (enabled) {
      timeout.current = setTimeout(() => {
        cb.current?.();
      }, ms);
    }
  }, [ms, enabled]);

  useEffect(() => {
    cb.current = fn;
  }, [fn]);

  useEffect(() => {
    setTo();
    return clear;
  }, [ms, enabled, setTo, clear]);

  return { clear, reset: setTo };
};

export default useTimeout;
