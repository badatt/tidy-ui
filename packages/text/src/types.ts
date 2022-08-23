import { HTMLAttributes } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * Types of text variants
 *
 * @typedef {TVariant}
 * @public
 */
export type TVariant =
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
 * @typedef {ITextProps}
 * @interface ITextProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ITextProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, creates bold text
   *
   * @type {?boolean}
   * @default false
   */
  bld?: boolean;

  /**
   * If `true`, create camel case text
   *
   * @type {?boolean}
   * @default false
   */
  cc?: boolean;

  /**
   * Sets the color fo the text
   *
   * @type {?TTone}
   * @default undefined
   */
  clr?: TTone;

  /**
   * If `true`, the text is centered
   *
   * @type {?boolean}
   * @default false
   */
  ctr?: boolean;

  /**
   * If `true`, the text is disabled
   *
   * @type {?boolean}
   * @default false
   */
  dsb?: boolean;

  /**
   * If `true`, the text is stretched to full width
   *
   * @type {?boolean}
   * @default false
   */
  exd?: boolean;

  /**
   * Link for component
   *
   * @type {?string}
   * @default undefined
   */
  href?: string;

  /**
   * If `true`, the text is italicized
   *
   * @type {?boolean}
   * @default false
   */
  itl?: boolean;

  /**
   * If `true`, the text is lowe cased
   *
   * @type {?boolean}
   * @default false
   */
  lc?: boolean;

  /**
   * If `true`, the text is truncated inside the width of its parent component
   *
   * @type {?boolean}
   * @default false
   */
  tnc?: boolean;

  /**
   * If `true`, creates the text upper case
   *
   * @type {?boolean}
   * @default false
   */
  uc?: boolean;

  /**
   * If `true`, creates the text underlined
   *
   * @type {?boolean}
   * @default false
   */
  udl?: boolean;

  /**
   * Text variant, the html component that this text represents
   *
   * @type {?TVariant}
   * @default 'body2'
   */
  v?: TVariant;
}

/**
 * DataField props
 *
 * @typedef {IDataFieldProps}
 * @interface IDataFieldProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IDataFieldProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Accent color for the filed label
   *
   * @type {?TTone}
   * @default 'major'
   */
  acc?: TTone;

  /**
   * If `true`, create bold value in the data field
   *
   * @type {?boolean}
   * @default false
   */
  bld?: boolean;

  /**
   * Set the color of the value in data field
   *
   * @type {?TTone}
   * @default undefined
   */
  clr?: TTone;

  /**
   * If `true`, the value of the data field is disabled
   *
   * @type {?boolean}
   * @default false
   */
  dsb?: boolean;

  /**
   * Icon for the label of the data field
   *
   * @type {?JSX.Element}
   * @default undefined
   */
  ico?: JSX.Element;

  /**
   * If `true`, creates italicized value of the data field
   *
   * @type {?boolean}
   * @default false
   */
  itl?: boolean;

  /**
   * Label of the data field
   *
   * @type {?string}
   * @default undefined
   */
  lbl?: string;

  /**
   * If `true`, the value of the data field is underlined
   *
   * @type {?boolean}
   * @default false
   */
  udl?: boolean;

  /**
   * Value of the data field
   *
   * @type {?(string | number)}
   * @default undefined
   */
  val?: string | number;
}
