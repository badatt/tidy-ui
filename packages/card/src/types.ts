import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Card props
 *
 * @export
 * @interface ICardProps
 * @typedef {ICardProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 */
export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the component is created with sharp edges
   *
   * @default false
   * @type {?boolean}
   */
  isSharp?: boolean;

  /**
   * Accent variant of the component, typically used to classify the
   * information based on its level
   *
   * @default undefined
   * @type {?TColor}
   */
  withAccent?: TColor;

  /**
   * Hyperlink the component
   *
   * @default undefined
   * @type {?string}
   */
  withHref?: string;
}

/**
 * CardFooter props
 *
 * @export
 * @interface ICardFooterProps
 * @typedef {ICardFooterProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 */
export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the footer is separated from body with a divider
   *
   * @default false
   * @type {?boolean}
   */
  isDivided?: boolean;
}

/**
 * CardHeader props
 *
 * @export
 * @interface ICardHeaderProps
 * @typedef {ICardHeaderProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 */
export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, header is separated from body with a divider
   *
   * @default false
   * @type {?boolean}
   */
  isDivided?: boolean;

  /**
   * Create a hyper link with a launch icon on top right corner,
   * on click opens a new tab with the associated hyperlink
   *
   * @default undefined
   * @type {?string}
   */
  withHref?: string;
}
