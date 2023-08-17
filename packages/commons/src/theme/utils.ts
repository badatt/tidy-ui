import { IColor, IHsla, IRgb } from '@tidy-ui/types';

/**
 * Creates hsla color representation
 *
 * @param {IHsla} p hsla attributes
 * @param {number} alpha alpha attribute to override
 * @returns {string} hsla representation of the color
 */
const hsla = (p: IHsla, alpha: number = p.alpha): string =>
  `hsla(${p.hue}, ${p.saturation}%, ${p.luminosity}%, ${alpha})`;

/**
 * Creates rgb color representation
 *
 * @param {IRgb} rgb RGB attributes
 * @returns {string} rgb representation of the color
 */
const rgb = (rgb: IRgb): string => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

/**
 * Creates color shades for a color
 *
 * @param {Record<number, IHsla>} p color record
 * @returns {IColor} shades for a color
 */
const createColor = (p: Record<number, IHsla>): IColor => {
  return {
    100: hsla(p[100]),
    200: hsla(p[200]),
    300: hsla(p[300]),
    400: hsla(p[400]),
    50: hsla(p[50]),
    500: hsla(p[500]),
    600: hsla(p[600]),
    700: hsla(p[700]),
    800: hsla(p[800]),
    900: hsla(p[900]),
    950: hsla(p[950]),
    shades: p,
  };
};

/**
 * Convert HSL to RGB
 *
 * @param {number} h Hue ∈ [0, 360)
 * @param {number} s Saturation ∈ [0, 100]
 * @param {number} l Lightness ∈ [0, 100]
 * @returns {IRgb} r, g, b ∈ [0, 255]
 */
const hsl2rgb = (h: number, s: number, l: number): IRgb => {
  /** @internal */
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  /** @internal */
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const rgb = [255 * f(0), 255 * f(8), 255 * f(4)];
  return {
    b: rgb[2],
    g: rgb[1],
    r: rgb[0],
  };
};

export { createColor, hsl2rgb, hsla, rgb };
