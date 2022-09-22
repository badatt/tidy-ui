import { HTMLAttributes } from 'react';
import { IBaseProps, TDirection, TSize, TTone } from '@tidy-ui/types';

/**
 * Tooltip props
 */
export interface ITooltipProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Title content of the tooltip
   */
  content?: string;
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
}
