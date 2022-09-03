import { HTMLAttributes } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * Card props
 *
 * @typedef {ICardProps}
 * @interface ICardProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ICardProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Accent variant of the component, typically used to classify the
   * information based on its level
   *
   * @type {?TTone}
   * @default undefined
   */
  accent?: TTone;

  /**
   * Position of the accent
   *
   * @default 'top'
   */
  accentPosition?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Element that encloses the card
   */
  ele?: JSX.Element;

  /**
   * Hyperlink the component
   *
   * @type {?string}
   * @default undefined
   */
  href?: string;

  /**
   * css `margin` equivalent
   */
  margin?: string;

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
export interface ICardFooterProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the footer is separated from body with a divider
   *
   * @type {?boolean}
   * @default false
   */
  divided?: boolean;

  /**
   * Element that encloses the footer
   */
  ele?: JSX.Element;
}

/**
 * CardHeader props
 *
 * @typedef {ICardHeaderProps}
 * @interface ICardHeaderProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface ICardHeaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, header is separated from body with a divider
   *
   * @type {?boolean}
   * @default false
   */
  divided?: boolean;

  /**
   * Element that encloses the header
   */
  ele?: JSX.Element;

  /**
   * Create a hyper link with a launch icon on top right corner,
   * on click opens a new tab with the associated hyperlink
   *
   * @type {?string}
   * @default undefined
   */
  href?: string;
}

/**
 * CardBody props
 */
export interface ICardBodyProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Element that encloses the body
   */
  ele?: JSX.Element;
}
