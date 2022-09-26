import { HTMLAttributes } from 'react';
import { TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Variant
 */
export enum Variant {
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
 * @typedef {TVariant}
 * @public
 */
export type TVariant = keyof typeof Variant;

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
   * If `true`, the text is lower cased
   *
   * @type {?boolean}
   * @default false
   */
  lc?: boolean;

  /**
   * Margin, css `margin` equivalent
   */
  mgn?: string;

  /**
   * If `true`, the text is strike through
   *
   * @default false
   */
  stk?: boolean;

  /**
   * If `true`, the text is truncated inside the width of its parent component
   *
   * @type {?boolean}
   * @default false
   */
  tnc?: boolean;

  /**
   * Sets the tone fo the text
   *
   * @type {?TTone}
   * @default undefined
   */
  tone?: TTone;

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
   * If `true`, the value of the data field is disabled
   *
   * @type {?boolean}
   * @default false
   */
  dsb?: boolean;

  /**
   * Label of the data field
   *
   * @type {?string | number | JSX.Element}
   * @default undefined
   */
  lbl?: string | number | JSX.Element;

  /**
   * Margin, css `margin` equivalent
   */
  mgn?: string;

  /**
   * Set the color of the value in data field
   *
   * @type {?TTone}
   * @default undefined
   */
  tone?: TTone;

  /**
   * Value of the data field
   *
   * @type {?(string | number | JSX.Element)}
   * @default undefined
   */
  val?: string | number | JSX.Element;
}
