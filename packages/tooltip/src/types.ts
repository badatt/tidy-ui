import { HTMLAttributes } from 'react';
import { TDirection, TSize, TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Tooltip props
 */
export interface ITooltipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of the tooltip
   *
   * @type {?TDirection}
   */
  direction?: TDirection;
  /**
   * Size of the tooltip
   *
   * @type {?TSize}
   */
  size?: TSize;
  /**
   * Tone of the tooltip
   *
   * @type {?TTone}
   */
  tone?: TTone;

  /**
   * Wraps lengthy content
   *
   * @default false
   */
  wrap?: boolean;
}
