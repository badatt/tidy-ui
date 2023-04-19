import React from 'react';

/**
 * Keyboard keypress aware hook
 *
 * @param {string} targetKey string key pressed
 * @returns {boolean} true if the key pressed
 */
const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = React.useState<boolean>(false);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const downHandler = ({ key }) => {
    console.log(key);
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  // eslint-disable-next-line jsdoc/require-jsdoc
  const upHandler = ({ key }) => {
    console.log(key);
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
