import { ITidyUIBaseTheme } from './base';

/**
 * Contract to define a custom theme. You should define all the required properties
 * under this interface to build a custom theme
 *
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 * @public
 * @interface ITidyUITheme
 * @typedef {ITidyUITheme}
 * @augments {ITidyUIBaseTheme}
 */
export interface ITidyUITheme extends ITidyUIBaseTheme {
  /**
   * Whether the theme is dark
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {boolean}
   */
  isDark: boolean;

  /**
   * An identifiable & meaningful name to the theme
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  name: string;

  /**
   * Palette design that holds all color variants in this theme
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IPalette}
   */
  palette: IPalette;
}

/**
 * Palette including all color variants
 *
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 * @public
 * @interface IPalette
 * @typedef {IPalette}
 */
export interface IPalette {
  /**
   * Component level background colors
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IBackgroundColor}
   */
  background: IBackgroundColor;

  /**
   * Represents `failure`, `fail`, `error`, `negative`, `sad` state context
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  danger: IColor;

  /**
   * Color used for dividers
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  divider: string;

  /**
   * Represents `informational` state context
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  info: IColor;

  /**
   * The most significant color that you want to paint in a theme
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  major: IColor;

  /**
   * The second most significant color that you want to paint in a theme
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  minor: IColor;

  /**
   * Represents `neutral`, `default` state context
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  neutral: IColor;

  /**
   * Represents `success`, `pass`, `positive`, `happy` state context
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  success: IColor;

  /**
   * Component level text colors
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {ITextColor}
   */
  text: ITextColor;

  /**
   * Represents `warn`, `alarm` state context
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {IColor}
   */
  warning: IColor;
}

/**
 * Background colors for various components
 *
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 * @public
 * @interface IBackgroundColor
 * @typedef {IBackgroundColor}
 */
export interface IBackgroundColor {
  /**
   * Background color for `Card` component
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  card: string;

  /**
   * Default color for other backgrounds
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  default: string;

  /**
   * Background color for `Paper` component
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  paper: string;
}

/**
 * Text colors for various components
 *
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 * @public
 * @interface ITextColor
 * @typedef {ITextColor}
 */
export interface ITextColor {
  /**
   * Color to represent disabled text
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  disabled: string;

  /**
   * Primary text color
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  primary: string;

  /**
   * Secondary text color
   *
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   * @type {string}
   */
  secondary: string;
}

/**
 * Color gradient with various shades
 *
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
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
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
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
