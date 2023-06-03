import React from 'react';
import BKDRHash from '../crypto/bkdr';
import md5 from '../crypto/md5';
import sha1 from '../crypto/sha1';
import sha256 from '../crypto/sha256';

/**
 * Generate hash based on algorithm
 *
 * @param {string} inp input string
 * @param {string} alg algorithm used for hashing
 * @returns {string | undefined} hashed string
 */
const genHash = (inp?: string, alg?: string): string | number | undefined => {
  if (inp) {
    switch (alg) {
      case 'MD5':
        return md5(inp);
      case 'SHA1':
        return sha1(inp);
      case 'SHA256':
        return sha256(inp);
      case 'BKDR':
        return BKDRHash(inp);
      default:
        return sha256(inp);
    }
  } else {
    return undefined;
  }
};

/**
 * useHash hook options
 */
export interface IUseHashOptions {
  /**
   * Algorithm used for hashing
   *
   * @default 'SHA256'
   */
  alg?: 'SHA256' | 'SHA1' | 'MD5' | 'BKDR';

  /**
   * Maximum length of the generated hash to return
   *
   * @default undefined
   */
  maxLen?: number;
}

/**
 * React hook to hash a given string
 *
 * @param {string} inp input string to hash
 * @param {IUseHashOptions} options hashing options
 * @returns {string | number | undefined} hashed string
 */
const useHash = (inp?: string, options?: IUseHashOptions): string | number | undefined => {
  return React.useMemo(() => {
    const hash = genHash(inp, options?.alg);
    if (typeof hash === 'string') return options?.maxLen ? hash?.substring(0, options.maxLen) : hash;
    else return hash;
  }, [inp]);
};

export default useHash;
