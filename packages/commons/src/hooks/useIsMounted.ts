import { useEffect, useRef } from 'react';

/**
 * Checks if the current component was mounted already
 *
 * @returns {boolean} `true` if the component is mounted already
 */
const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
};

export default useIsMounted;
