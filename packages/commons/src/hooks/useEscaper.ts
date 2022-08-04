import { useMemo } from 'react';

const useEscaper = (inp?: string) => {
  return useMemo(() => inp?.replace(/[\W]+/g, '-'), [inp]); //NOSONAR
};

export default useEscaper;
