/* eslint-disable typescript-sort-keys/string-enum */

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
  shades: Record<TShade, IHsla>;
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

/**
 * Color contract for rgb color representation
 */
export interface IRgb {
  /**
   * B component
   */
  b: number;
  /**
   * G component
   */
  g: number;
  /**
   * R component
   */
  r: number;
}

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
 * Girth enum
 */
export enum Girth {
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
}

/**
 * Girth types for components
 *
 * @typedef {TGirth}
 * @public
 */
export type TGirth = keyof typeof Girth;

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
export const Shade = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

/**
 * Shade of color
 *
 * @typedef {TShade}
 * @public
 */
export type TShade = (typeof Shade)[number];

/**
 * BorderStyle type
 */
export enum BorderStyle {
  'dashed',
  'dotted',
  'double',
  'groove',
  'hidden',
  'ridge',
  'solid',
}

/**
 * BorderStyle type
 *
 * @typedef {TBorderStyle}
 * @public
 */
export type TBorderStyle = keyof typeof BorderStyle;

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

/**
 * ButtonVariant
 */
export enum ButtonVariant {
  'hero',
  'outlined',
  'primary',
  'simple',
}

/**
 * Button variants
 *
 * `primary` -> For most significant actions in a page. If at all, only one recommended in a page
 * <br />
 * `outlined` -> Second most significant actions, can be multiple
 * <br />
 * `hero` -> Like a banner on a page, use this if you want to standout the action you want
 * the user to take
 * <br />
 * `basic` -> default actions
 * <br />
 * `simple` -> For ghost actions, use this if you don't want to let user notice that it exists
 * <br />
 *
 * @type {TButtonVariant}
 * @public
 */
export type TButtonVariant = keyof typeof ButtonVariant;

/**
 * Density
 */
export enum Density {
  'thin',
  'medium',
  'thick',
}

/**
 * Divider density props
 */
export type TDensity = keyof typeof Density;

/**
 * css `flex-direction`
 */
export enum FlexDirection {
  'row',
  'row-reverse',
  'column',
  'column-reverse',
}

/**
 * `flex-direction` props
 */
export type TFlexDirection = keyof typeof FlexDirection;

/**
 * css `align-content`
 */
export enum AlignContent {
  'normal',
  'baseline',
  'first baseline',
  'last baseline',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'unsafe',
  'safe',
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
}

/**
 * `align-content` props
 */
export type TAlignContent = keyof typeof AlignContent;

/**
 * css `align-items`
 */
export enum AlignItems {
  'normal',
  'stretch',
  'baseline',
  'first baseline',
  'last baseline',
  'safe',
  'unsafe',
  'flex-start',
  'flex-end',
  'center',
  'start',
  'end',
  'self-start',
  'self-end',
}

/**
 * `align-items` props
 */
export type TAlignItems = keyof typeof AlignItems;

/**
 * css `align-self`
 */
export enum AlignSelf {
  'auto',
  'normal',
  'stretch',
  'baseline',
  'first baseline',
  'last baseline',
  'unsafe',
  'safe',
  'center',
  'start',
  'end',
  'self-start',
  'self-end',
  'flex-start',
  'flex-end',
}

/**
 * `align-self` props
 */
export type TAlignSelf = keyof typeof AlignSelf;

/**
 * css `justify-content`
 */
export enum JustifyContent {
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'normal',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'safe',
  'unsafe',
}
/**
 * `justify-content` props
 */
export type TJustifyContent = keyof typeof JustifyContent;

/**
 * Input variants
 */
export enum InputVariant {
  'outlined',
  'filled',
  'underline',
  'simple',
}

/**
 * Input variants
 *
 * `outlined` -> Input with an outline box
 * <br />
 * `filled` -> Filled input without any outline but shaded fill color
 * <br />
 * `underline` -> Input with just an underline
 * <br />
 * `simple` -> No styled input
 * <br />
 *
 * @typedef {TInputVariant}
 * @public
 */
export type TInputVariant = keyof typeof InputVariant;

/**
 * StackAlign
 */
export enum StackAlign {
  'stretch',
  'baseline',
  'flex-start',
  'flex-end',
  'center',
}

/**
 * TStackAlign props
 */
export type TStackAlign = keyof typeof StackAlign;

/**
 * StackJustify
 */
export enum StackJustify {
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
}

/**
 * TStackJustify props
 */
export type TStackJustify = keyof typeof StackJustify;

/**
 * StackOrder
 */
export enum StackOrder {
  'row',
  'row-reverse',
  'column',
  'column-reverse',
}

/**
 * TStackOrder props
 */
export type TStackOrder = keyof typeof StackOrder;

/**
 * Text variants
 */
export enum TextVariant {
  'hero',
  'title1',
  'title2',
  'subtitle1',
  'subtitle2',
  'caption',
  'body1',
  'body2',
  'span',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
}

/**
 * Types of text variants
 *
 * @typedef {TTextVariant}
 * @public
 */
export type TTextVariant = keyof typeof TextVariant;
