import { DefaultTheme } from 'styled-components';

/**
 * Base theme contract
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface ITidyUIBaseTheme
 * @typedef {ITidyUIBaseTheme}
 * @extends {DefaultTheme}
 */
export interface ITidyUIBaseTheme extends DefaultTheme {
  /**
   * Breakpoints for responsive design
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IBreakpoints}
   */
  breakpoints: IBreakpoints;

  /**
   * Layout configuration
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {ILayout}
   */
  layout: ILayout;

  /**
   * Typography configuration
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {ITypography}
   */
  typography: ITypography;
}

/**
 * Breakpoints contract for responsive design
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface IBreakpoints
 * @typedef {IBreakpoints}
 */
export interface IBreakpoints {
  /**
   * Full HD monitors, HD laptop screens width breakpoint
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  lg: number;

  /**
   * PC, Laptop, Notebook, Mac or standard monitor width breakpoint
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  md: number;

  /**
   * Tablets screen width breakpoint
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  sm: number;

  /**
   * TV, Ultra HD, 4K screen width breakpoint
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  xl: number;

  /**
   * Mobile screen width breakpoint
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  xs: number;
}

/**
 * Contract for layout representation of component
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface ILayout
 * @typedef {ILayout}
 */
export interface ILayout {
  /**
   * Border radius if any
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {string}
   */
  radius: string;

  /**
   * Shadow configuration
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {string}
   */
  shadow: string;
}

/**
 * Typography contract
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface ITypography
 * @typedef {ITypography}
 */
export interface ITypography {
  /**
   * Primary variant for body text
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  body1: IText;

  /**
   * Secondary variant for body text
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  body2: IText;

  /**
   * Caption text, usually used to represent image caption, table caption etc.
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  caption: IText;

  /**
   * A code like text variant
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  code: IText;

  /**
   * Default font size for a component
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {string}
   */
  fontSize: string;

  /**
   * Default bold font weight value
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  fontWeightBold: number;

  /**
   * Default light weight font value
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  fontWeightLight: number;

  /**
   * Default medium font weight value
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  fontWeightMedium: number;

  /**
   * Default regular font weight value
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {number}
   */
  fontWeightRegular: number;

  /**
   * Most significant titles, similar to hero. Represent `h1` tag in html
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  h1: IText;

  /**
   * Represent `h2` tag in html
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  h2: IText;

  /**
   * Represent `h3` tag in html
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  h3: IText;

  /**
   * Represent `h4` tag in html
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  h4: IText;

  /**
   * Represent `h5` tag in html
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  h5: IText;

  /**
   * Represent `h6` tag in html
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  h6: IText;

  /**
   * Hero is the most significant in a theme, with highest typographical values
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  hero: IText;

  /**
   * Paragraph text variant
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  p: IText;

  /**
   * Text to represent labels, short text etc
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  span: IText;

  /**
   * Primary variant of subtitles
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  subtitle1: IText;

  /**
   * Secondary variant of subtitles
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  subtitle2: IText;

  /**
   * Primary variant for Main titles
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  title1: IText;

  /**
   * Secondary variant for Main titles
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {IText}
   */
  title2: IText;
}

/**
 * Text contract
 * @author Balu Praveen Datty <dev.badatt@gmail.com>
 *
 * @export
 * @interface IText
 * @typedef {IText}
 */
export interface IText {
  /**
   * Font size, represent `font-size` in css
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {(number | string)}
   */
  fontSize: string;

  /**
   * Font weight, represent `font-weight` in css
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {(number | string)}
   */
  fontWeight: number | string;

  /**
   * Letter spacing, represent `letter-spacing` in css
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {(number | string)}
   */
  letterSpacing: string;

  /**
   * Line height, represent `line-height` in css
   * @author Balu Praveen Datty <dev.badatt@gmail.com>
   *
   * @type {(number | string)}
   */
  lineHeight: number;
}
