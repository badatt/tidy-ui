import { HTMLAttributes } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * Badge component props
 *
 * @typedef {IBadgeProps}
 * @interface IBadgeProps
 * @augments {HTMLAttributes<HTMLSpanElement>}
 * @public
 */
export interface IBadgeProps extends IBaseProps, HTMLAttributes<HTMLSpanElement> {
  /**
   * If `true`, the badge blinks (1s linear)
   *
   * @type {?boolean}
   * @default false
   */
  blink?: boolean;

  /**
   * The data value of the badge
   *
   * @type {?(number | string)}
   */
  data?: number | string;

  /**
   * If `true`, the badge is a dot, no content included
   *
   * @type {?boolean}
   * @default false
   */
  dotted?: boolean;

  /**
   * If `true`, the badge is removed
   *
   * @type {?boolean}
   * @default false
   */
  hidden?: boolean;

  /**
   * The maximum integer value allowed inside the badge,
   * if the data value exceeds this max value, a `+` is added as suffix
   *
   * @type {?number}
   * @default 99
   */
  max?: number;

  /**
   * If `true`, the badge is outlines, not filled
   *
   * @type {?boolean}
   * @default false
   */
  outlined?: boolean;

  /**
   * If `true`, the badge is forced to show 0 even the data value is 0
   *
   * @type {?boolean}
   * @default false
   */
  show0?: boolean;

  /**
   * The tone of the badge component
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}
