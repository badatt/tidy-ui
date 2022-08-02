import { useCallback, useEffect, useRef } from 'react';

/**
 * Checks if the current component was mounted already
 *
 * @returns {Function} callback function to check if the component is mounted already
 */
const useIsMounted = (): (() => boolean) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};

export default useIsMounted;
