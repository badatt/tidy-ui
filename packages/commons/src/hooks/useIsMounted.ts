import { useCallback, useEffect, useRef } from 'react';

/**
 * Checks if the current component was mounted already
 */
const useIsMounted = () => {
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
