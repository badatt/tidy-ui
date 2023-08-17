import { HTMLAttributes } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * Interface defining properties for configuring a Badge component.
 *
 * @interface IBadgeProps
 * @type {IBadgeProps}
 * @augments {HTMLAttributes<HTMLSpanElement>}
 * @public
 * @since 0.47.0
 */
export interface IBadgeProps extends IBaseProps, HTMLAttributes<HTMLSpanElement> {
  /**
   * An optional property dictating the content to be showcased within the badge.
   *
   * @type {number | string}
   * @public
   * @since 0.47.0
   */
  content?: number | string;

  /**
   * An optional property determining whether the badge should exhibit blinking behavior, following a linear 1-second interval.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isBlink?: boolean;

  /**
   * An optional property specifying whether the badge should manifest as a dot without any associated content.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isDotted?: boolean;

  /**
   * An optional property indicating whether the badge should appear as an outline rather than being filled.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isOutlined?: boolean;

  /**
   * An optional property compelling the badge to display the numeral '0', even when the data value is precisely 0. Applicable solely to numeric content.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isShow0?: boolean;

  /**
   * An optional property establishing the maximum allowable integer value within the badge. If the data value exceeds this cap, a `+` suffix is appended. Relevant exclusively to numeric content.
   *
   * @type {number}
   * @default 99
   * @public
   * @since 0.47.0
   */
  max?: number;

  /**
   * An optional property defining the visual tone of the badge component, influencing its aesthetic representation.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}
