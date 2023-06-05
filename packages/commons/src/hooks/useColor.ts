import React from 'react';
import { IRgb, rgb } from '../theme';
import { ColorHash } from '../utils';

/**
 * useColor return type
 */
interface IUseColorReturn {
  /**
   * contrast color, generally used as text inside the main color for better visibility
   */
  contrastColor: string;
  /**
   * random color generate
   */
  mainColor: string;
}

/**
 * useColor props
 */
interface IUseColorProps {
  /**
   * some base text to compute hash, helps in efficient randomization
   */
  text: string;
}

/**
 * Generates a random color based on the sample input text you provide
 *
 * @param {IUseColorProps} options props
 * @returns {IUseColorReturn} returns colors
 */
const useColor = (options: IUseColorProps): IUseColorReturn => {
  return React.useMemo(() => {
    const colorHash = new ColorHash({});
    const rgbColor = colorHash.rgb(options.text);

    /** @internal */
    const rgbToYIQ = (c: IRgb) => {
      return (c.r * 299 + c.g * 587 + c.b * 114) / 1000;
    };

    return {
      contrastColor: rgbToYIQ(rgbColor) >= 128 ? '#000' : '#fff',
      mainColor: rgb(rgbColor),
    };
  }, [options.text]);
};

export default useColor;
