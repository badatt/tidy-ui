import { DefaultTheme } from 'styled-components';

/**
 * Base theme contract
 *
 * @public
 * @interface ITidyUIBaseTheme
 * @typedef {ITidyUIBaseTheme}
 * @augments {DefaultTheme}
 */
export interface ITidyUIBaseTheme extends DefaultTheme {
  /**
   * Breakpoints for responsive design
   *
   * @type {IBreakpoints}
   */
  breakpoints: IBreakpoints;

  /**
   * Layout configuration
   *
   * @type {ILayout}
   */
  layout: ILayout;

  /**
   * Typography configuration
   *
   * @type {ITypography}
   */
  typography: ITypography;
}

/**
 * Breakpoints contract for responsive design
 *
 * @public
 * @interface IBreakpoints
 * @typedef {IBreakpoints}
 */
export interface IBreakpoints {
  /**
   * Full HD monitors, HD laptop screens width breakpoint
   *
   * @type {number}
   */
  lg: number;

  /**
   * PC, Laptop, Notebook, Mac or standard monitor width breakpoint
   *
   * @type {number}
   */
  md: number;

  /**
   * Tablets screen width breakpoint
   *
   * @type {number}
   */
  sm: number;

  /**
   * TV, Ultra HD, 4K screen width breakpoint
   *
   * @type {number}
   */
  xl: number;

  /**
   * Mobile screen width breakpoint
   *
   * @type {number}
   */
  xs: number;
}

/**
 * Contract for layout representation of component
 *
 * @public
 * @interface ILayout
 * @typedef {ILayout}
 */
export interface ILayout {
  /**
   * Border radius if any
   *
   * @type {string}
   */
  radius: string;

  /**
   * Shadow configuration
   *
   * @type {string}
   */
  shadow: string;
}

/**
 * Typography contract
 *
 * @public
 * @interface ITypography
 * @typedef {ITypography}
 */
export interface ITypography {
  /**
   * Primary variant for body text
   *
   * @type {IText}
   */
  body1: IText;

  /**
   * Secondary variant for body text
   *
   * @type {IText}
   */
  body2: IText;

  /**
   * Caption text, usually used to represent image caption, table caption etc.
   *
   * @type {IText}
   */
  caption: IText;

  /**
   * A code like text variant
   *
   * @type {IText}
   */
  code: IText;

  /**
   * Default font size for a component
   *
   * @type {string}
   */
  fontSize: string;

  /**
   * Default bold font weight value
   *
   * @type {number}
   */
  fontWeightBold: number;

  /**
   * Default light weight font value
   *
   * @type {number}
   */
  fontWeightLight: number;

  /**
   * Default medium font weight value
   *
   * @type {number}
   */
  fontWeightMedium: number;

  /**
   * Default regular font weight value
   *
   * @type {number}
   */
  fontWeightRegular: number;

  /**
   * Most significant titles, similar to hero. Represent `h1` tag in html
   *
   * @type {IText}
   */
  h1: IText;

  /**
   * Represent `h2` tag in html
   *
   * @type {IText}
   */
  h2: IText;

  /**
   * Represent `h3` tag in html
   *
   * @type {IText}
   */
  h3: IText;

  /**
   * Represent `h4` tag in html
   *
   * @type {IText}
   */
  h4: IText;

  /**
   * Represent `h5` tag in html
   *
   * @type {IText}
   */
  h5: IText;

  /**
   * Represent `h6` tag in html
   *
   * @type {IText}
   */
  h6: IText;

  /**
   * Hero is the most significant in a theme, with highest typographical values
   *
   * @type {IText}
   */
  hero: IText;

  /**
   * Paragraph text variant
   *
   * @type {IText}
   */
  p: IText;

  /**
   * Text to represent labels, short text etc
   *
   * @type {IText}
   */
  span: IText;

  /**
   * Primary variant of subtitles
   *
   * @type {IText}
   */
  subtitle1: IText;

  /**
   * Secondary variant of subtitles
   *
   * @type {IText}
   */
  subtitle2: IText;

  /**
   * Primary variant for Main titles
   *
   * @type {IText}
   */
  title1: IText;

  /**
   * Secondary variant for Main titles
   *
   * @type {IText}
   */
  title2: IText;
}

/**
 * Text contract
 *
 * @public
 * @interface IText
 * @typedef {IText}
 */
export interface IText {
  /**
   * Font size, represent `font-size` in css
   *
   * @type {(number | string)}
   */
  fontSize: string;

  /**
   * Font weight, represent `font-weight` in css
   *
   * @type {(number | string)}
   */
  fontWeight: number | string;

  /**
   * Letter spacing, represent `letter-spacing` in css
   *
   * @type {(number | string)}
   */
  letterSpacing: string;

  /**
   * Line height, represent `line-height` in css
   *
   * @type {(number | string)}
   */
  lineHeight: number;
}
