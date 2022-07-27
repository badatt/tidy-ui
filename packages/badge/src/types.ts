import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Badge component props
 *
 * @export
 * @interface IBadgeProps
 * @typedef {IBadgeProps}
 * @extends {HTMLAttributes<HTMLSpanElement>}
 */
export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * If `true`, the badge blinks (1s linear)
   *
   * @default false
   * @type {?boolean}
   */
  isBlink?: boolean;

  /**
   * If `true`, the badge is a dot, no content included
   * @default false
   * @type {?boolean}
   */
  isDotted?: boolean;

  /**
   * If `true`, the badge is removed
   * @default false
   * @type {?boolean}
   */
  isInvisible?: boolean;

  /**
   * If `true`, the badge is forced to show 0 even the data value is 0
   * @default false
   * @type {?boolean}
   */
  isShowZero?: boolean;

  /**
   * The color of the badge component
   * @default 'major'
   * @type {?TColor}
   */
  withColor?: TColor;

  /**
   * The data value of the badge
   *
   * @type {?(number | string)}
   */
  withData?: number | string;

  /**
   * The maximum integer value allowed inside the badge,
   * if the data value exceeds this max value, a `+` is added as suffix
   * @default 99
   * @type {?number}
   */
  withMax?: number;
}
