import { useMemo } from 'react';

const useEscaper = (inp?: string) => {
  return useMemo(() => inp?.replace(/[\s\W]+/g, '-'), [inp]);
};

export default useEscaper;
