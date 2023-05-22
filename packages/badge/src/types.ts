import { HTMLAttributes } from 'react';
import { TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

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
   * The content to hold inside the badge
   *
   * @type {?(number | string)}
   */
  content?: number | string;

  /**
   * If `true`, the badge blinks (1s linear)
   *
   * @type {?boolean}
   * @default false
   */
  isBlink?: boolean;

  /**
   * If `true`, the badge is a dot, no content included
   *
   * @type {?boolean}
   * @default false
   */
  isDotted?: boolean;

  /**
   * If `true`, the badge is outlines, not filled
   *
   * @type {?boolean}
   * @default false
   */
  isOutlined?: boolean;

  /**
   * If `true`, the badge is forced to show 0 even the data value is 0.
   * Applies to only number type content
   *
   * @type {?boolean}
   * @default false
   */
  isShow0?: boolean;

  /**
   * The maximum integer value allowed inside the badge,
   * if the data value exceeds this max value, a `+` is added as suffix.
   * Applies to only number type content
   *
   * @type {?number}
   * @default 99
   */
  max?: number;

  /**
   * The tone of the badge component
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}
