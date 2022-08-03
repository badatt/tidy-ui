import { useMemo } from 'react';
import useEscaper from './useEscaper';
import useHash from './useHash';

const useIdGen = (inp?: string) => {
  const escapedString = useEscaper(inp);
  const hash = useHash(escapedString);
  const genId = useMemo(() => {
    return `${escapedString}-${hash}`;
  }, [inp]);
  return genId;
};

export default useIdGen;
