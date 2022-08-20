import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Card props
 *
 * @typedef {ICardProps}
 * @interface ICardProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accent variant of the component, typically used to classify the
   * information based on its level
   *
   * @type {?TColor}
   * @default undefined
   */
  accent?: TColor;

  /**
   * Hyperlink the component
   *
   * @type {?string}
   * @default undefined
   */
  href?: string;

  /**
   * If `true`, the component is created with sharp edges
   *
   * @type {?boolean}
   * @default false
   */
  sharp?: boolean;
}

/**
 * CardFooter props
 *
 * @typedef {ICardFooterProps}
 * @interface ICardFooterProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the footer is separated from body with a divider
   *
   * @type {?boolean}
   * @default false
   */
  divided?: boolean;
}

/**
 * CardHeader props
 *
 * @typedef {ICardHeaderProps}
 * @interface ICardHeaderProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, header is separated from body with a divider
   *
   * @type {?boolean}
   * @default false
   */
  divided?: boolean;

  /**
   * Create a hyper link with a launch icon on top right corner,
   * on click opens a new tab with the associated hyperlink
   *
   * @type {?string}
   * @default undefined
   */
  href?: string;
}
