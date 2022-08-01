import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Types of text variants
 *
 * @export
 * @typedef {TAs}
 */
export type TAs =
  | 'hero'
  | 'title1'
  | 'title2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'body1'
  | 'body2'
  | 'code'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

/**
 * Text props
 *
 * @export
 * @interface ITextProps
 * @typedef {ITextProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface ITextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text variant, the html component that this text represents
   *
   * @default 'body2'
   * @type {?TAs}
   */
  as?: TAs;

  /**
   * If `true`, creates bold text
   *
   * @default false
   * @type {?boolean}
   */
  bld?: boolean;

  /**
   * If `true`, create camel case text
   *
   * @default false
   * @type {?boolean}
   */
  cc?: boolean;

  /**
   * Sets the color fo the text
   *
   * @default undefined
   * @type {?TColor}
   */
  clr?: TColor;

  /**
   * If `true`, the text is centered
   *
   * @default false
   * @type {?boolean}
   */
  ctr?: boolean;

  /**
   * If `true`, the text is disabled
   *
   * @default false
   * @type {?boolean}
   */
  dsb?: boolean;

  /**
   * If `true`, the text is stretched to full width
   *
   * @default false
   * @type {?boolean}
   */
  exd?: boolean;

  /**
   * If `true`, the text is italicized
   *
   * @default false
   * @type {?boolean}
   */
  itl?: boolean;

  /**
   * If `true`, the text is lowe cased
   *
   * @default false
   * @type {?boolean}
   */
  lc?: boolean;

  /**
   * If `true`, the text is truncated inside the width of its parent component
   *
   * @default false
   * @type {?boolean}
   */
  tnc?: boolean;

  /**
   * If `true`, creates the text upper case
   *
   * @default false
   * @type {?boolean}
   */
  uc?: boolean;

  /**
   * If `true`, creates the text underlined
   *
   * @default false
   * @type {?boolean}
   */
  udl?: boolean;
}

/**
 * DataField props
 *
 * @export
 * @interface IDataFieldProps
 * @typedef {IDataFieldProps}
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface IDataFieldProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accent color for the filed label
   *
   * @default 'major'
   * @type {?TColor}
   */
  acc?: TColor;

  /**
   * If `true`, create bold value in the data field
   *
   * @default false
   * @type {?boolean}
   */
  bld?: boolean;

  /**
   * Set the color of the value in data field
   *
   * @default undefined
   * @type {?TColor}
   */
  clr?: TColor;

  /**
   * If `true`, the value of the data field is disabled
   *
   * @default false
   * @type {?boolean}
   */
  dsb?: boolean;

  /**
   * Icon for the label of the data field
   *
   * @default undefined
   * @type {?JSX.Element}
   */
  ico?: JSX.Element;

  /**
   * If `true`, creates italicized value of the data field
   *
   * @default false
   * @type {?boolean}
   */
  itl?: boolean;

  /**
   * Label of the data field
   *
   * @default undefined
   * @type {?string}
   */
  lbl?: string;

  /**
   * If `true`, the value of the data field is underlined
   *
   * @default false
   * @type {?boolean}
   */
  udl?: boolean;

  /**
   * Value of the data field
   *
   * @default undefined
   * @type {?(string | number)}
   */
  val?: string | number;
}
