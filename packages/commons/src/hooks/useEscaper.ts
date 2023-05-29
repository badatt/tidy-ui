import React from 'react';

/**
 * React hook to escape special characters in a given string
 *
 * @param {string} inp string to escape non word characters
 * @returns {string | undefined} escaped string
 */
const useEscaper = (inp?: string): string | undefined => {
  return React.useMemo(() => inp?.replace(/[\W]+/g, '-'), [inp]); //NOSONAR
};

export default useEscaper;
