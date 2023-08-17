import { HTMLAttributes } from 'react';
import { IBaseProps, TDirection } from '@tidy-ui/types';

/**
 * Interface for configuring props for the Tooltip component, providing additional information on hover.
 *
 * @interface ITooltipProps
 * @type {ITooltipProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ITooltipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The canWrap property determines whether the tooltip content should wrap to multiple lines if it exceeds the available width.
   * Enable wrapping for lengthy tooltip content to ensure readability and proper presentation.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  canWrap?: boolean;

  /**
   * The direction property specifies the placement direction of the tooltip relative to its target element.
   * Position the tooltip above, below, to the left, or to the right of the target element as needed.
   *
   * @type {TDirection}
   * @default bottom
   * @public
   * @since 0.47.0
   */
  direction?: TDirection;
}
