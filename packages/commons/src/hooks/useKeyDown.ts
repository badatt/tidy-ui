import React from 'react';

/**
 * Keyboard keydown aware hook
 *
 * @param {string} targetKey string key down
 * @returns {boolean} true if the key down triggered
 */
const useKeyDown = (targetKey: string): boolean => {
  const [keyDown, setKeyDown] = React.useState<boolean>(false);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyDown(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return keyDown;
};

export default useKeyDown;
