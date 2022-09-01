import React from 'react';

/**
 * Checks if the current component was mounted already
 *
 * @returns {Function} callback function to check if the component is mounted already
 */
const useIsMounted = (): (() => boolean) => {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return React.useCallback(() => isMounted.current, []);
};

export default useIsMounted;
