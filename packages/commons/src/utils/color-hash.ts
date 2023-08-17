import { IRgb } from '@tidy-ui/types';
import bkdr from '../crypto/bkdr';
import { hsl2rgb } from '../theme';

/**
 * Hue
 */
interface IHue {
  /**
   * maximum value of hue
   */
  max?: number;
  /**
   * minimum value of hue
   */
  min?: number;
}

/**
 * ColorHash options
 */
interface ColorHashOptions {
  /**
   * Hue
   */
  hue?: number | IHue | IHue[];
  /**
   * Lightness
   */
  lightness?: number | number[];
  /**
   * Saturation
   */
  saturation?: number | number[];
}

/**
 * Utility to generate color based on a string computing its hash
 */
class ColorHash {
  private L: number[];
  private S: number[];
  private hueRanges: IHue[];

  /**
   * Constructor params
   *
   * @param {ColorHashOptions} options color hash options
   */
  constructor(options: ColorHashOptions) {
    const [L, S] = [options.lightness, options.saturation].map(function (param) {
      param = param ?? [0.35, 0.5, 0.65]; // note that 3 is a prime
      return Array.isArray(param) ? param.concat() : [param];
    });

    this.L = L;
    this.S = S;

    if (typeof options.hue === 'number') {
      options.hue = { max: options.hue, min: options.hue };
    }
    if (typeof options.hue === 'object' && !Array.isArray(options.hue)) {
      options.hue = [options.hue];
    }
    if (typeof options.hue === 'undefined') {
      options.hue = [];
    }
    this.hueRanges = options.hue.map(function (range) {
      return {
        max: range.max ?? 360,
        min: range.min ?? 0,
      };
    });
  }

  /**
   * Returns the hash in [h, s, l].
   * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
   *
   * @param {string} str string to hash
   * @returns {Array} [h, s, l]
   */
  hsl(str: string): [number, number, number] {
    let h: number;
    let hash = bkdr(str);
    const hueResolution = 727; // note that 727 is a prime

    if (this.hueRanges.length) {
      const range = this.hueRanges[hash % this.hueRanges.length];
      h = (((hash / this.hueRanges.length) % hueResolution) * (range.max! - range.min!)) / hueResolution + range.min!;
    } else {
      h = hash % 359; // note that 359 is a prime
    }
    hash = Math.ceil(hash / 360);
    const s = this.S[hash % this.S.length];
    hash = Math.ceil(hash / this.S.length);
    const l = this.L[hash % this.L.length];

    return [h, s, l];
  }

  /**
   * Returns the hash in [r, g, b].
   * Note that R, G, B ∈ [0, 255]
   *
   * @param {string} str string to hash
   * @returns {Array} [r, g, b]
   */
  rgb(str: string): IRgb {
    const hsl = this.hsl(str);
    const rgb = hsl2rgb(hsl[0], hsl[1], hsl[2]);
    return rgb;
  }
}

export default ColorHash;
