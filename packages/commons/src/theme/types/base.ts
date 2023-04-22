/* eslint-disable typescript-sort-keys/string-enum */

/**
 * Screen size enum
 */
export enum Screen {
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
}

/**
 * Screen size variants
 */
export type TScreen = keyof typeof Screen;

/**
 * Screen props contract for responsive design
 *
 * @typedef {IScreenProps}
 * @interface IScreenProps
 * @public
 */
export interface IScreenProps {
  /**
   * Defines the breakpoints at which layout will change, adapting to different screen sizes.
   */
  breakpoint: number;
}

/**
 * Contract for layout representation of component
 *
 * @typedef {ILayout}
 * @interface ILayout
 * @public
 */
export interface ILayout {
  /**
   * Border radius if any
   *
   * @type {string}
   */
  radius: string;

  /**
   * Screens details for responsive design
   *
   * @type {Record<TScreen, IScreenProps>}
   */
  screens: Record<TScreen, IScreenProps>;

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
 * @typedef {ITypography}
 * @interface ITypography
 * @public
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
 * Font contract
 */
export interface IFont {
  /**
   * Default bold font weight value
   *
   * @type {number}
   */
  bold: number;

  /**
   * Font family
   *
   * @type {string}
   */
  family: string;

  /**
   * Default light weight font value
   *
   * @type {number}
   */
  light: number;

  /**
   * Default medium font weight value
   *
   * @type {number}
   */
  medium: number;

  /**
   * Mono type font family
   *
   * @type {string}
   */
  mono: string;

  /**
   * Default regular font weight value
   *
   * @type {number}
   */
  regular: number;

  /**
   * Default font size for a component
   *
   * @type {string}
   */
  size: string;
}

/**
 * Text contract
 *
 * @typedef {IText}
 * @interface IText
 * @public
 */
export interface IText {
  /**
   * Font size, represent `font-size` in css
   *
   * @type {(string)}
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
   * @type {(string)}
   */
  letterSpacing: string;

  /**
   * Line height, represent `line-height` in css
   *
   * @type {(number)}
   */
  lineHeight: number;

  /**
   * Margin at the bottom
   *
   * @type {(string)}
   */
  marginBottom: string;
}

/**
 * Status enum
 */
export enum Status {
  'info',
  'success',
  'warning',
  'danger',
}

/**
 * Status for components
 *
 * @typedef {TStatus}
 * @public
 */
export type TStatus = keyof typeof Status;

/**
 * Tone enum
 */
export enum Tone {
  'major',
  'minor',
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
}

/**
 * Tone for components
 *
 * @typedef {TTone}
 * @public
 */
export type TTone = keyof typeof Tone;

/**
 * Size enum
 */
export enum Size {
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
}

/**
 * Size types for components
 *
 * @typedef {TSize}
 * @public
 */
export type TSize = keyof typeof Size;

/**
 * Accent types for components
 *
 * @typedef {TAccent}
 * @public
 */
export type TAccent = keyof typeof Tone;

/**
 * Shades
 */

// eslint-disable-next-line jsdoc/require-jsdoc
export const Shade = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

/**
 * Shade of color
 *
 * @typedef {TShade}
 * @public
 */
export type TShade = (typeof Shade)[number];

/**
 * Border type
 */
export enum Border {
  'dashed',
  'dotted',
  'double',
  'groove',
  'hidden',
  'ridge',
  'solid',
}

/**
 * Border type
 *
 * @typedef {TBorder}
 * @public
 */
export type TBorder = keyof typeof Border;

/**
 * Positioning
 */
export enum Positioning {
  'top-left',
  'top-center',
  'top-right',
  'right-top',
  'right-center',
  'right-bottom',
  'bottom-right',
  'bottom-center',
  'bottom-left',
  'left-bottom',
  'left-center',
  'left-top',
}

/**
 * Positioning type
 *
 * @typedef {TPositioning}
 * @public
 */
export type TPositioning = keyof typeof Positioning;

/**
 * Direction
 */
export enum Direction {
  'top',
  'right',
  'bottom',
  'left',
}

/**
 * Direction type
 *
 * @typedef {TDirection}
 * @public
 */
export type TDirection = keyof typeof Direction;
