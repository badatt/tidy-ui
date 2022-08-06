import { HTMLAttributes } from 'react';
import { TColor } from '@tidy-ui/types';

/**
 * Badge component props
 *
 * @typedef {IBadgeProps}
 * @interface IBadgeProps
 * @augments {HTMLAttributes<HTMLSpanElement>}
 * @public
 */
export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * If `true`, the badge blinks (1s linear)
   *
   * @type {?boolean}
   * @default false
   */
  isBlinking?: boolean;

  /**
   * If `true`, the badge is a dot, no content included
   *
   * @type {?boolean}
   * @default false
   */
  isDotted?: boolean;

  /**
   * If `true`, the badge is removed
   *
   * @type {?boolean}
   * @default false
   */
  isInvisible?: boolean;

  /**
   * If `true`, the badge is outlines, not filled
   *
   * @type {?boolean}
   * @default false
   */
  isOutlined?: boolean;

  /**
   * If `true`, the badge is forced to show 0 even the data value is 0
   *
   * @type {?boolean}
   * @default false
   */
  isShowZero?: boolean;

  /**
   * The color of the badge component
   *
   * @type {?TColor}
   * @default 'major'
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
   *
   * @type {?number}
   * @default 99
   */
  withMax?: number;
}
