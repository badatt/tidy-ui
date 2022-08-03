import { useMemo } from 'react';
import md5 from '../crypto/md5';
import sha1 from '../crypto/sha1';
import sha256 from '../crypto/sha256';

const useHash = (inp?: string, alg = 'SHA256') => {
  return useMemo(() => {
    switch (alg) {
      case 'MD5':
        return md5(inp);
      case 'SHA1':
        return sha1(inp);
      case 'SHA256':
        return sha256(inp);
      default:
        return sha256(inp);
    }
  }, [inp]);
};

export default useHash;
