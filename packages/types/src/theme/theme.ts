import { ITidyUIBaseTheme } from './base';

/**
 * Contract to define a custom theme. You should define all the required properties
 * under this interface to build a custom theme
 *
 * @public
 * @interface ITidyUITheme
 * @typedef {ITidyUITheme}
 * @augments {ITidyUIBaseTheme}
 */
export interface ITidyUITheme extends ITidyUIBaseTheme {
  /**
   * Whether the theme is dark
   *
   * @type {boolean}
   */
  isDark: boolean;

  /**
   * An identifiable & meaningful name to the theme
   *
   * @type {string}
   */
  name: string;

  /**
   * Palette design that holds all color variants in this theme
   *
   * @type {IPalette}
   */
  palette: IPalette;
}

/**
 * Palette including all color variants
 *
 * @public
 * @interface IPalette
 * @typedef {IPalette}
 */
export interface IPalette {
  /**
   * Component level background colors
   *
   * @type {IBackgroundColor}
   */
  background: IBackgroundColor;

  /**
   * Represents `failure`, `fail`, `error`, `negative`, `sad` state context
   *
   * @type {IColor}
   */
  danger: IColor;

  /**
   * Color used for dividers
   *
   * @type {string}
   */
  divider: string;

  /**
   * Represents `informational` state context
   *
   * @type {IColor}
   */
  info: IColor;

  /**
   * The most significant color that you want to paint in a theme
   *
   * @type {IColor}
   */
  major: IColor;

  /**
   * The second most significant color that you want to paint in a theme
   *
   * @type {IColor}
   */
  minor: IColor;

  /**
   * Represents `neutral`, `default` state context
   *
   * @type {IColor}
   */
  neutral: IColor;

  /**
   * Represents `success`, `pass`, `positive`, `happy` state context
   *
   * @type {IColor}
   */
  success: IColor;

  /**
   * Component level text colors
   *
   * @type {ITextColor}
   */
  text: ITextColor;

  /**
   * Represents `warn`, `alarm` state context
   *
   * @type {IColor}
   */
  warning: IColor;
}

/**
 * Background colors for various components
 *
 * @public
 * @interface IBackgroundColor
 * @typedef {IBackgroundColor}
 */
export interface IBackgroundColor {
  /**
   * Background color for `Card` component
   *
   * @type {string}
   */
  card: string;

  /**
   * Default color for other backgrounds
   *
   * @type {string}
   */
  default: string;

  /**
   * Background color for `Paper` component
   *
   * @type {string}
   */
  paper: string;
}

/**
 * Text colors for various components
 *
 * @public
 * @interface ITextColor
 * @typedef {ITextColor}
 */
export interface ITextColor {
  /**
   * Color to represent disabled text
   *
   * @type {string}
   */
  disabled: string;

  /**
   * Primary text color
   *
   * @type {string}
   */
  primary: string;

  /**
   * Secondary text color
   *
   * @type {string}
   */
  secondary: string;
}

/**
 * Color gradient with various shades
 *
 * @public
 * @interface IColor
 * @typedef {IColor}
 */
export interface IColor {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  shades: Record<number, IHsla>;
}

/**
 * Color contract for a hsla color representation
 *
 * @public
 * @interface IHsla
 * @typedef {IHsla}
 */
export interface IHsla {
  alpha: number;
  hue: number;
  luminosity: number;
  saturation: number;
}
