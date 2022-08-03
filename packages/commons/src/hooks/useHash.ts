import { useMemo } from 'react';
import md5 from '../crypto/md5';
import sha1 from '../crypto/sha1';
import sha256 from '../crypto/sha256';

const genHash = (inp?: string, alg?: string) => {
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
};

export interface IUseHashOptions {
  alg?: 'SHA256' | 'SHA1' | 'MD5';
  maxLen?: number;
}

const useHash = (inp?: string, options?: IUseHashOptions) => {
  return useMemo(() => {
    const hash = inp && genHash(inp, options?.alg);
    return options?.maxLen ? hash?.substring(0, options.maxLen) : hash;
  }, [inp]);
};

export default useHash;
