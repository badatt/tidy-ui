import { DefaultTheme } from 'styled-components';
import { IFont, ILayout, ITypography } from './base';

/**
 * GlobalFont
 */
export interface IGlobalFont {
  /**
   * css `font-family` equivalent
   */
  family?: string;

  /**
   * when given, added to `@import url()` in css
   */
  url?: string;
}

/**
 * GlobalDefault
 */
export interface IGlobalDefault {
  /**
   * theme
   */
  theme?: ITidyUITheme;
}

/**
 * Contract to define a custom theme. You should define all the required properties
 * under this interface to build a custom theme
 *
 * @typedef {ITidyUITheme}
 * @interface ITidyUITheme
 * @augments {DefaultTheme}
 * @public
 */
export interface ITidyUITheme extends DefaultTheme {
  /**
   * Global font settings
   *
   * @type {IFont}
   */
  font: IFont;

  /**
   * Whether the theme is dark
   *
   * @type {boolean}
   */
  isDark: boolean;

  /**
   * Layout configuration
   *
   * @type {ILayout}
   */
  layout: ILayout;

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

  /**
   * Typography configuration
   *
   * @type {ITypography}
   */
  typography: ITypography;
}

/**
 * Palette including all color variants
 *
 * @typedef {IPalette}
 * @interface IPalette
 * @public
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
 * @typedef {IBackgroundColor}
 * @interface IBackgroundColor
 * @public
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
 * @typedef {ITextColor}
 * @interface ITextColor
 * @public
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
 * @typedef {IColor}
 * @interface IColor
 * @public
 */
export interface IColor {
  /**
   * shade with 50 units
   */
  50: string;
  /**
   * shade with 100 units
   */
  100: string;
  /**
   * shade with 200 units
   */
  200: string;
  /**
   * shade with 300 units
   */
  300: string;
  /**
   * shade with 400 units
   */
  400: string;
  /**
   * shade with 500 units
   */
  500: string;
  /**
   * shade with 600 units
   */
  600: string;
  /**
   * shade with 700 units
   */
  700: string;
  /**
   * shade with 800 units
   */
  800: string;
  /**
   * shade with 900 units
   */
  900: string;
  /**
   * shade with 950 units
   */
  950: string;
  /**
   * All shades
   */
  shades: Record<number, IHsla>;
}

/**
 * Color contract for a hsla color representation
 *
 * @typedef {IHsla}
 * @interface IHsla
 * @public
 */
export interface IHsla {
  /**
   * Alpha (lightness) attribute of the color
   */
  alpha: number;
  /**
   * Hue attribute
   */
  hue: number;
  /**
   * Luminosity attribute
   */
  luminosity: number;
  /**
   * Saturation attribute
   */
  saturation: number;
}
